import { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { API_BASE_URL } from '../constants/api'
import { SALES_EMAIL, SUPPORT_EMAIL } from '../constants/emails'

import { EARLY_ACCESS_PATH } from '../constants/app'
import { plans, reminderLimitsNote } from '../constants/plans'

const inquiryTypes = [
  { value: 'DEMO', label: 'Book a demo' },
  { value: 'PLANS', label: 'Explore plans & pricing' },
  { value: 'GENERAL', label: 'General sales inquiry' },
  { value: 'SUPPORT', label: 'Product support' },
]

const teamSizes = ['Just me', '2–5 people', '6–15 people', '16–50 people', '50+ people']

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  firmName: '',
  teamSize: '',
  inquiryType: 'DEMO',
  planInterest: 'early-access',
  message: '',
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const type = searchParams.get('type')
    const plan = searchParams.get('plan')
    setForm((prev) => ({
      ...prev,
      inquiryType: type === 'plans' ? 'PLANS' : type === 'support' ? 'SUPPORT' : prev.inquiryType,
      planInterest: plan || prev.planInterest,
    }))
    if (type === 'plans' && location.hash !== '#demo') {
      window.requestAnimationFrame(() => {
        document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [searchParams, location.hash])

  useEffect(() => {
    const scrollTarget = location.hash === '#demo' ? 'demo' : location.hash === '#plans' ? 'plans' : null
    if (scrollTarget) {
      window.requestAnimationFrame(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location.hash, location.pathname])

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const payload = await response.json().catch(() => ({}))

      if (!response.ok || payload.success === false) {
        throw new Error(payload.message || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(emptyForm)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Unable to send your message. Please email us directly.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-b from-primary-50/60 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">
                Sales &amp; Support
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 tracking-tight leading-tight">
                Explore plans or book a demo with our team
              </h1>
              <p className="mt-5 text-base sm:text-lg text-surface-500 leading-relaxed">
                Whether you want to see FileOnce in action, discuss the right plan for your firm,
                or need help with an existing account — we&apos;re here. Sales inquiries go to{' '}
                <a href={`mailto:${SALES_EMAIL}`} className="text-primary-600 font-medium hover:text-primary-700">
                  {SALES_EMAIL}
                </a>
                ; product support is at{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary-600 font-medium hover:text-primary-700">
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section id="plans" className="py-16 sm:py-20 bg-surface-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
                Plans for compliance professionals
              </h2>
              <p className="mt-4 text-surface-500">
                Early Access is open now with full Enterprise features. Basic, Professional, and Enterprise
                tiers are coming soon — compare what&apos;s included below.
              </p>
            </div>

            <div className="overflow-x-auto mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[640px] text-sm border border-surface-200 rounded-xl overflow-hidden bg-white">
                <thead>
                  <tr className="bg-surface-50 text-left">
                    <th className="px-4 py-3 font-semibold text-surface-700">Feature</th>
                    <th className="px-4 py-3 font-semibold text-surface-700">Basic</th>
                    <th className="px-4 py-3 font-semibold text-surface-700">Professional</th>
                    <th className="px-4 py-3 font-semibold text-surface-700">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100 text-surface-600">
                  {[
                    ['Active clients', '50', '200', 'Unlimited'],
                    ['Manual email reminders / day', '25', '60', 'Unlimited'],
                    ['Manual WhatsApp reminders / day', '25', '60', 'Unlimited'],
                    ['Automated reminders', '—', '✓', '✓'],
                    ['Team users', '1', '3–5', '10+'],
                  ].map(([feature, basic, pro, ent]) => (
                    <tr key={feature} className="hover:bg-surface-50/50">
                      <td className="px-4 py-3 font-medium text-surface-800">{feature}</td>
                      <td className="px-4 py-3">{basic}</td>
                      <td className="px-4 py-3">{pro}</td>
                      <td className="px-4 py-3">{ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-xs text-surface-400 leading-relaxed max-w-3xl">
                {reminderLimitsNote}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-2xl border p-6 sm:p-7 flex flex-col ${
                    plan.status === 'available'
                      ? 'border-primary-500 shadow-lg shadow-primary-100/50'
                      : 'border-surface-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-surface-900">{plan.name}</h3>
                      <p className="text-sm text-surface-500 mt-1">{plan.description}</p>
                    </div>
                    <span
                      className={`shrink-0 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                        plan.status === 'available'
                          ? 'bg-primary-100 text-primary-700'
                          : 'bg-surface-100 text-surface-500'
                      }`}
                    >
                      {plan.status === 'available' ? 'Available' : 'Coming soon'}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {[
                      { label: 'Monthly', price: plan.monthly, compare: plan.monthlyCompare, savings: plan.monthlySavings },
                      { label: 'Quarterly', price: plan.quarterly, compare: plan.quarterlyCompare, savings: plan.quarterlySavings },
                      { label: 'Yearly', price: plan.yearly, compare: plan.yearlyCompare, savings: plan.yearlySavings },
                    ].map((cycle) => (
                    <div key={cycle.label} className="rounded-lg bg-surface-50 border border-surface-200 px-2 py-3 text-center">
                      <p className="text-[10px] text-surface-400 uppercase">{cycle.label}</p>
                      {cycle.compare && cycle.savings > 0 && (
                        <>
                          <p className="text-[9px] font-semibold text-emerald-700 mt-1">Save {cycle.savings}%</p>
                          <p className="text-[10px] text-surface-400 line-through">{cycle.compare}</p>
                        </>
                      )}
                      <p className="text-sm font-bold text-surface-900 mt-0.5">{cycle.price}</p>
                    </div>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm text-surface-600 mb-6 flex-1">
                    {plan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary-500 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {plan.status === 'available' ? (
                    <Link
                      to={EARLY_ACCESS_PATH}
                      className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors"
                    >
                      Get Early Access
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        updateField('inquiryType', 'PLANS')
                        updateField('planInterest', plan.id)
                        document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-primary-700 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                    >
                      Ask about {plan.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
                  Book a demo
                </h2>
                <p className="mt-4 text-surface-500 leading-relaxed">
                  Share a few details and we&apos;ll reach out to schedule a walkthrough tailored
                  to your firm&apos;s compliance workflow.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-surface-200 bg-surface-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-surface-400 mb-1">
                      Sales &amp; marketing
                    </p>
                    <a
                      href={`mailto:${SALES_EMAIL}`}
                      className="text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      {SALES_EMAIL}
                    </a>
                  </div>
                  <div className="rounded-xl border border-surface-200 bg-surface-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-surface-400 mb-1">
                      Product support
                    </p>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-surface-200 shadow-sm p-6 sm:p-8 space-y-5"
                >
                  {status === 'success' && (
                    <div className="rounded-xl bg-primary-50 border border-primary-200 px-4 py-3 text-sm text-primary-800">
                      Thanks — we received your message and will get back to you shortly.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-surface-700 mb-1.5">
                        Full name *
                      </label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full rounded-xl border border-surface-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-surface-700 mb-1.5">
                        Work email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full rounded-xl border border-surface-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                        placeholder="you@firm.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-surface-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full rounded-xl border border-surface-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                        placeholder="+91 ..."
                      />
                    </div>
                    <div>
                      <label htmlFor="firmName" className="block text-sm font-medium text-surface-700 mb-1.5">
                        Firm / company
                      </label>
                      <input
                        id="firmName"
                        value={form.firmName}
                        onChange={(e) => updateField('firmName', e.target.value)}
                        className="w-full rounded-xl border border-surface-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                        placeholder="Your firm or practice name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-surface-700 mb-1.5">
                        I&apos;m interested in *
                      </label>
                      <select
                        id="inquiryType"
                        required
                        value={form.inquiryType}
                        onChange={(e) => updateField('inquiryType', e.target.value)}
                        className="w-full rounded-xl border border-surface-200 px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-surface-700 mb-1.5">
                        Team size
                      </label>
                      <select
                        id="teamSize"
                        value={form.teamSize}
                        onChange={(e) => updateField('teamSize', e.target.value)}
                        className="w-full rounded-xl border border-surface-200 px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                      >
                        <option value="">Select...</option>
                        {teamSizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="planInterest" className="block text-sm font-medium text-surface-700 mb-1.5">
                      Plan of interest
                    </label>
                    <select
                      id="planInterest"
                      value={form.planInterest}
                      onChange={(e) => updateField('planInterest', e.target.value)}
                      className="w-full rounded-xl border border-surface-200 px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                    >
                      {plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name}
                          {plan.status === 'coming-soon' ? ' (coming soon)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-surface-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full rounded-xl border border-surface-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 resize-y"
                      placeholder="Tell us about your workflow, client volume, or what you'd like to see in a demo..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-surface-900 px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white">Ready to start now?</h3>
                <p className="mt-2 text-surface-400 text-sm">
                  Early Access signup takes a few minutes — no demo required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={EARLY_ACCESS_PATH}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-surface-900 bg-white rounded-xl hover:bg-surface-100 transition-colors"
                >
                  Get Early Access
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-surface-300 border border-surface-700 rounded-xl hover:border-surface-500 hover:text-white transition-colors"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
