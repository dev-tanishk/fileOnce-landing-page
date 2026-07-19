import { impactMetrics } from '../constants/features'

export default function Impact() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">Business Impact</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 tracking-tight">
            Transform How Your Firm Operates — Measurably
          </h2>
          <p className="mt-4 text-surface-500 text-sm sm:text-base leading-relaxed">
            FileOnce doesn&apos;t just organise your work — it fundamentally changes the economics
            of compliance delivery. Less chasing. More capacity. Stronger client relationships.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {impactMetrics.map((b) => (
            <div
              key={b.title}
              className="bg-gradient-to-br from-white to-primary-50/30 border border-surface-200 rounded-xl p-5 hover:border-primary-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-2xl">{b.icon}</span>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary-600 leading-none">{b.stat}</p>
                  <p className="text-[10px] text-surface-400 mt-0.5 uppercase tracking-wide">{b.statLabel}</p>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-surface-900 mb-1">{b.title}</h3>
              <p className="text-xs text-surface-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
