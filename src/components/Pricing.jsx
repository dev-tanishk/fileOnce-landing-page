import { Link } from 'react-router-dom'
import { EARLY_ACCESS_PATH } from '../constants/app'
import { earlyAccessPlan, reminderLimitsNote } from '../constants/plans'

const ENTERPRISE_PAISE = {
  monthly: 199_900,
  quarterly: 539_900,
  yearly: 2_039_900,
};

const EARLY_ACCESS_PAISE = {
  monthly: 79_900,
  quarterly: 209_900,
  yearly: 799_900,
};

function formatInr(paise) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(paise / 100);
}

function savingsPercent(listPaise, actualPaise) {
  return Math.round(((listPaise - actualPaise) * 100) / listPaise);
}

const cycles = [
  {
    id: 'monthly',
    label: 'Monthly',
    pricePaise: EARLY_ACCESS_PAISE.monthly,
    comparePaise: ENTERPRISE_PAISE.monthly,
    note: 'Billed every month',
  },
  {
    id: 'quarterly',
    label: 'Quarterly',
    pricePaise: EARLY_ACCESS_PAISE.quarterly,
    comparePaise: ENTERPRISE_PAISE.quarterly,
    note: 'Billed every 3 months',
  },
  {
    id: 'yearly',
    label: 'Yearly',
    pricePaise: EARLY_ACCESS_PAISE.yearly,
    comparePaise: ENTERPRISE_PAISE.yearly,
    note: 'Billed annually',
  },
].map((cycle) => ({
  ...cycle,
  price: formatInr(cycle.pricePaise),
  comparePrice: formatInr(cycle.comparePaise),
  savings: savingsPercent(cycle.comparePaise, cycle.pricePaise),
}));

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-surface-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">
            Early Access
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
            Simple pricing while we launch
          </h2>
          <p className="mt-4 text-surface-500 text-base leading-relaxed">
            We&apos;re opening FileOnce to a small group of compliance professionals first. Full Enterprise features
            at Early Access pricing — no feature tiers to figure out yet.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-primary-500 shadow-xl shadow-primary-100/40 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-4 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Early Access</h3>
                  <p className="text-primary-100 text-sm mt-0.5">Enterprise features · launch pricing</p>
                </div>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wide bg-white/20 px-3 py-1 rounded-full">
                  Save up to {Math.max(...cycles.map((c) => c.savings))}%
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <ul className="space-y-3 text-sm text-surface-600 mb-8">
                {earlyAccessPlan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-2 mb-8">
                {cycles.map((cycle) => (
                  <div
                    key={cycle.id}
                    className="rounded-xl border border-surface-200 bg-surface-50 px-3 py-4 text-center"
                  >
                    <p className="text-xs font-medium text-surface-500">{cycle.label}</p>
                    <p className="text-[10px] font-semibold text-emerald-700 mt-1">Save {cycle.savings}%</p>
                    <p className="text-xs text-surface-400 line-through mt-0.5">
                      {cycle.comparePrice}
                    </p>
                    <p className="text-lg font-bold text-surface-900 mt-0.5">{cycle.price}</p>
                    <p className="text-[10px] text-surface-400 mt-1 leading-tight">{cycle.note}</p>
                  </div>
                ))}
              </div>

              <Link
                to={EARLY_ACCESS_PATH}
                className="flex items-center justify-center w-full px-6 py-3.5 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Early Access
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <p className="text-center text-xs text-surface-400 mt-4 leading-relaxed">
                Strikethrough prices reflect the upcoming Enterprise plan.{' '}
                <Link to="/contact#plans" className="text-primary-600 font-medium hover:text-primary-700">
                  Compare all plans
                </Link>
                {' '}including Basic, Professional &amp; Enterprise tiers coming soon.
              </p>
              <p className="text-center text-[11px] text-surface-400 mt-2 leading-relaxed px-2">
                {reminderLimitsNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
