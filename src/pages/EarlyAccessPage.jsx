import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { billingApi, signupApi } from '../api/signup';
import { extractError } from '../api/client';
import { cyclePricing, formatInr } from '../utils/pricing';

const BILLING_CYCLES = [
  { id: 'MONTHLY', label: 'Monthly' },
  { id: 'QUARTERLY', label: 'Quarterly' },
  { id: 'YEARLY', label: 'Yearly' },
];

function maskEmail(email) {
  if (!email || !email.includes('@')) return email;
  const [local, domain] = email.split('@');
  if (local.length <= 1) return `*@${domain}`;
  return `${local[0]}***@${domain}`;
}

function Spinner({ className = 'h-4 w-4', light }) {
  return (
    <span
      className={`inline-block rounded-full animate-spin border-2 border-r-transparent ${className} ${
        light ? 'border-white' : 'border-primary-600'
      }`}
    />
  );
}

function Field({ label, delay = 0, ...props }) {
  return (
    <div
      className="animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <label className="block text-sm font-medium text-surface-700 mb-1.5">{label}</label>
      <input
        className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow duration-200"
        {...props}
      />
    </div>
  );
}

function SavingsPrice({ amount, compare, savings, comparePlanName, size = 'md' }) {
  const priceClass = size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-xs' : 'text-lg';
  return (
    <div className={`flex flex-col ${size === 'sm' ? 'items-center' : 'items-end'} gap-0.5`}>
      {compare != null && savings > 0 && (
        <>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
            Save {savings}%
          </span>
          <span className="text-xs text-surface-400 line-through">
            {formatInr(compare)}
            {comparePlanName ? ` · ${comparePlanName}` : ''}
          </span>
        </>
      )}
      <span className={`font-bold text-surface-900 ${priceClass}`}>{formatInr(amount)}</span>
    </div>
  );
}

function PrimaryButton({ children, className = '', loading, disabled, ...props }) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {loading && <Spinner light className="h-4 w-4 mr-2" />}
      {children}
    </button>
  );
}

function SecondaryButton({ children, className = '', disabled, ...props }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-surface-700 bg-white border border-surface-200 rounded-xl hover:border-surface-300 hover:bg-surface-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function StepPanel({ stepKey, direction, children }) {
  return (
    <div
      key={stepKey}
      className={direction === 'forward' ? 'animate-step-forward' : 'animate-step-back'}
    >
      {children}
    </div>
  );
}

function BillingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-surface-200 p-4 space-y-3">
        <div className="h-3 w-24 rounded animate-shimmer" />
        <div className="h-4 w-full rounded animate-shimmer" />
        <div className="h-4 w-3/4 rounded animate-shimmer" />
      </div>
      <div>
        <div className="h-4 w-28 rounded animate-shimmer mb-3" />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-20 rounded-xl animate-shimmer" />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-4 gap-2 text-sm text-surface-500">
        <Spinner />
        <span>Loading plans…</span>
      </div>
    </div>
  );
}

export default function EarlyAccessPage() {
  const [step, setStep] = useState(1);
  const [stepDirection, setStepDirection] = useState('forward');
  const [form, setForm] = useState({
    name: '',
    firmName: '',
    email: '',
    password: '',
  });
  const [billingCycle, setBillingCycle] = useState('MONTHLY');
  const [earlyAccessPlan, setEarlyAccessPlan] = useState(null);
  const [signupOrder, setSignupOrder] = useState(null);
  const [resendMessage, setResendMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    billingApi.getPlans()
      .then((res) => {
        const plans = res.data || [];
        setEarlyAccessPlan(plans.find((p) => p.planType === 'EARLY_ACCESS') || plans[0] || null);
      })
      .catch(() => setEarlyAccessPlan(null))
      .finally(() => setDataLoading(false));
  }, []);

  const goToStep = (next) => {
    setStepDirection(next > step ? 'forward' : 'back');
    setError(null);
    setStep(next);
  };

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const selectedPricing = cyclePricing(earlyAccessPlan, billingCycle);

  const handleDetailsNext = (e) => {
    e.preventDefault();
    goToStep(2);
  };

  const handleStartPayment = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await signupApi.startSignup({
        ...form,
        planType: 'EARLY_ACCESS',
        billingCycle,
      });
      setSignupOrder(res.data);
      goToStep(3);
    } catch (err) {
      setError(extractError(err, 'Could not start signup'));
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = async () => {
    if (!signupOrder?.signupToken) return;
    setError(null);
    setResendMessage(null);
    setLoading(true);
    try {
      const res = await signupApi.markPaymentCompleted(signupOrder.signupToken);
      setResendMessage(res.message || 'Payment email resent.');
    } catch (err) {
      setError(extractError(err, 'Could not resend payment email'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      <Navbar />
      <main className="flex-1 w-full pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-lg mx-auto px-4 sm:px-6 animate-early-access-card">
          <div className="bg-white rounded-2xl border border-surface-200 shadow-xl shadow-surface-200/40 p-6 sm:p-8">
            <div className="animate-fade-in-up opacity-0">
              <h1 className="text-2xl font-bold text-surface-900">Get Early Access</h1>
              <p className="text-surface-500 text-sm mt-1 mb-6 transition-opacity duration-300">
                {step === 1 && 'Step 1 of 3 — Your details'}
                {step === 2 && 'Step 2 of 3 — Choose billing'}
                {step === 3 && 'Step 3 of 3 — Check your email'}
              </p>
            </div>

            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-1.5 flex-1 rounded-full bg-surface-200 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-primary-600 transition-all duration-500 ease-out ${
                      step >= n ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </div>

            {error && (
              <div className="mb-5 px-3 py-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg animate-fade-in">
                {error}
              </div>
            )}

            {step === 1 && (
              <StepPanel stepKey={1} direction={stepDirection}>
                <form onSubmit={handleDetailsNext} className="space-y-5">
                  <Field
                    label="Full name"
                    placeholder="Rajesh Sharma"
                    value={form.name}
                    onChange={update('name')}
                    delay={80}
                    required
                  />
                  <Field
                    label="Firm name"
                    placeholder="Sharma & Associates"
                    value={form.firmName}
                    onChange={update('firmName')}
                    delay={140}
                    required
                  />
                  <Field
                    type="email"
                    label="Email address"
                    placeholder="rajesh@sharmaassociates.in"
                    value={form.email}
                    onChange={update('email')}
                    delay={200}
                    required
                    autoComplete="email"
                  />
                  <Field
                    type="password"
                    label="Password"
                    placeholder="Minimum 8 characters"
                    value={form.password}
                    onChange={update('password')}
                    delay={260}
                    required
                    autoComplete="new-password"
                    minLength={8}
                  />
                  <div
                    className="animate-fade-in-up opacity-0 pt-1"
                    style={{ animationDelay: '320ms' }}
                  >
                    <PrimaryButton type="submit" className="w-full">
                      Continue
                    </PrimaryButton>
                  </div>
                </form>
              </StepPanel>
            )}

            {step === 2 && (
              <StepPanel stepKey={2} direction={stepDirection}>
                {dataLoading ? (
                  <BillingSkeleton />
                ) : (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-primary-200 bg-primary-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-1">
                        Early Access
                      </p>
                      <p className="text-sm text-surface-700">
                        {earlyAccessPlan?.description
                          || 'Full platform access at launch pricing — limited time'}
                      </p>
                      {earlyAccessPlan?.comparePlanName && (
                        <p className="text-xs text-emerald-700 mt-2 font-medium">
                          Includes full {earlyAccessPlan.comparePlanName} features at Early Access pricing.
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-surface-700 mb-2">Billing cycle</p>
                      <div className="grid grid-cols-3 gap-2">
                        {BILLING_CYCLES.map((cycle) => {
                          const pricing = cyclePricing(earlyAccessPlan, cycle.id);
                          const selected = billingCycle === cycle.id;
                          return (
                            <button
                              key={cycle.id}
                              type="button"
                              onClick={() => setBillingCycle(cycle.id)}
                              className={`px-3 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                                selected
                                  ? 'border-primary-600 bg-primary-50 text-primary-700 scale-[1.02] shadow-sm'
                                  : 'border-surface-200 text-surface-600 hover:border-surface-300 hover:bg-surface-50'
                              }`}
                            >
                              <span className="block">{cycle.label}</span>
                              {earlyAccessPlan && (
                                <SavingsPrice
                                  size="sm"
                                  amount={pricing.amount}
                                  compare={pricing.compare}
                                  savings={pricing.savings}
                                  comparePlanName={pricing.comparePlanName}
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {earlyAccessPlan && (
                      <div className="rounded-xl bg-surface-50 border border-surface-200 px-4 py-3 flex items-center justify-between text-sm gap-3 transition-all duration-300">
                        <span className="text-surface-600">
                          Early Access · {BILLING_CYCLES.find((c) => c.id === billingCycle)?.label}
                        </span>
                        <SavingsPrice
                          amount={selectedPricing.amount}
                          compare={selectedPricing.compare}
                          savings={selectedPricing.savings}
                          comparePlanName={selectedPricing.comparePlanName}
                        />
                      </div>
                    )}

                    <div className="flex gap-3">
                      <SecondaryButton
                        className="flex-1"
                        disabled={loading}
                        onClick={() => goToStep(1)}
                      >
                        Back
                      </SecondaryButton>
                      <PrimaryButton
                        className="flex-[2]"
                        loading={loading}
                        disabled={dataLoading || !earlyAccessPlan}
                        onClick={handleStartPayment}
                      >
                        {loading ? 'Sending email…' : 'Email me payment details'}
                      </PrimaryButton>
                    </div>
                  </div>
                )}
              </StepPanel>
            )}

            {step === 3 && signupOrder && (
              <StepPanel stepKey={3} direction={stepDirection}>
                <div className="space-y-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-success-pop">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '120ms' }}>
                    <h2 className="text-xl font-bold text-surface-900">Check your email</h2>
                    <p className="mt-3 text-sm text-surface-600 leading-relaxed">
                      We sent payment QR codes and instructions to{' '}
                      <strong>{maskEmail(signupOrder.email || form.email)}</strong>.
                      Open the email on your phone to pay.
                    </p>
                  </div>

                  <div className="rounded-xl bg-surface-900 text-white px-4 py-4 text-center animate-fade-in-up opacity-0" style={{ animationDelay: '180ms' }}>
                    <p className="text-xs uppercase tracking-wide text-surface-400">Amount to pay</p>
                    {signupOrder.savingsPercent > 0 && signupOrder.compareAmountPaise && (
                      <p className="text-sm text-surface-400 mt-2 line-through">
                        {formatInr(signupOrder.compareAmountPaise)}
                        {signupOrder.comparePlanName ? ` · ${signupOrder.comparePlanName}` : ''}
                      </p>
                    )}
                    <p className="text-3xl font-bold mt-1">{formatInr(signupOrder.amountPaise)}</p>
                    <p className="text-sm text-surface-400 mt-1">
                      {signupOrder.planName} · {signupOrder.billingCycle}
                    </p>
                  </div>

                  <div
                    className="rounded-xl border border-primary-100 bg-primary-50 px-4 py-3 text-left text-sm text-surface-700 animate-fade-in-up opacity-0"
                    style={{ animationDelay: '240ms' }}
                  >
                    <p className="font-medium text-surface-900 mb-2">What to do next</p>
                    <ol className="space-y-1.5 list-decimal list-inside text-surface-600">
                      <li>Open the FileOnce payment email on your phone</li>
                      <li>Scan either QR code and pay the exact amount shown</li>
                      <li>Follow the WhatsApp instructions in the email to send your payment screenshot</li>
                    </ol>
                  </div>

                  <div
                    className="rounded-xl border border-surface-200 bg-surface-50 px-4 py-3 text-left text-sm text-surface-600 animate-fade-in-up opacity-0"
                    style={{ animationDelay: '280ms' }}
                  >
                    <p className="font-medium text-surface-900 mb-1">Can&apos;t find the email?</p>
                    <p>Check your spam or promotions folder, or tap &quot;Resend payment email&quot; below.</p>
                  </div>

                  {resendMessage && (
                    <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 animate-fade-in">
                      {resendMessage}
                    </p>
                  )}

                  <div
                    className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-left text-sm text-surface-700 animate-fade-in-up opacity-0"
                    style={{ animationDelay: '320ms' }}
                  >
                    <p className="font-medium text-surface-900 mb-1">Sign-in details by email</p>
                    <p>
                      We&apos;ll verify your payment manually within 2 hours. Once approved, we&apos;ll email
                      your sign-in details — you don&apos;t need to sign in until then.
                    </p>
                  </div>

                  <div className="flex gap-3 animate-fade-in-up opacity-0" style={{ animationDelay: '360ms' }}>
                    <SecondaryButton className="flex-1" disabled={loading} onClick={() => goToStep(2)}>
                      Back
                    </SecondaryButton>
                    <PrimaryButton className="flex-[2]" loading={loading} onClick={handleResendEmail}>
                      {loading ? 'Resending…' : 'Resend payment email'}
                    </PrimaryButton>
                  </div>

                  <a
                    href="/"
                    className="inline-block text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    Go back to home
                  </a>
                </div>
              </StepPanel>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
