import { capabilityHighlights } from '../constants/features'

const categoryColors = {
  Operations: 'bg-accent-50 text-accent-700 border-accent-200',
  'Client Experience': 'bg-primary-50 text-primary-700 border-primary-200',
  Communication: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Visibility: 'bg-violet-50 text-violet-700 border-violet-200',
  Relationships: 'bg-amber-50 text-amber-700 border-amber-200',
  'Quality Control': 'bg-rose-50 text-rose-700 border-rose-200',
}

export default function FeatureDeepDive() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-surface-50/40 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">
            Platform Capabilities
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 tracking-tight">
            Enterprise-Grade Infrastructure for Compliance Operations
          </h2>
          <p className="mt-4 text-surface-500 text-sm sm:text-base leading-relaxed">
            FileOnce isn&apos;t a document folder with a calendar attached. It&apos;s a full-stack
            operations platform — request orchestration, client communication, document intelligence,
            and real-time visibility — built for firms that take compliance delivery seriously.
          </p>
        </div>

        <div className="space-y-6">
          {capabilityHighlights.map((cap, index) => {
            const reversed = index % 2 === 1
            return (
              <article
                key={cap.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-surface-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:shadow-primary-100/30 hover:border-primary-200/60 transition-all duration-300 ${
                  reversed ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className={reversed ? 'lg:[direction:ltr]' : ''}>
                  <span
                    className={`inline-flex text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${
                      categoryColors[cap.category] || 'bg-surface-50 text-surface-600 border-surface-200'
                    }`}
                  >
                    {cap.category}
                  </span>
                  <div className="flex items-center gap-3 mt-4 mb-2">
                    <span className="text-3xl">{cap.icon}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-surface-900">{cap.title}</h3>
                  </div>
                  <p className="text-sm font-medium text-primary-600 mb-3">{cap.tagline}</p>
                  <p className="text-sm text-surface-600 leading-relaxed mb-5">{cap.desc}</p>
                  <ul className="space-y-2.5">
                    {cap.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-surface-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <div className="relative rounded-xl border border-surface-200 bg-gradient-to-br from-surface-50 to-white p-5 sm:p-6 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="relative space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-surface-500 uppercase tracking-wide">
                          {cap.category}
                        </span>
                        <span className="text-xs text-primary-600 font-medium">Live</span>
                      </div>
                      <div className="bg-white border border-surface-200 rounded-lg p-4 shadow-sm">
                        <p className="text-xs font-semibold text-surface-800 mb-3">{cap.title}</p>
                        {cap.bullets.slice(0, 3).map((bullet, i) => (
                          <div
                            key={bullet}
                            className="flex items-center gap-2 py-2 border-b border-surface-100 last:border-0"
                          >
                            <span
                              className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                                i === 0
                                  ? 'bg-primary-100 text-primary-700'
                                  : i === 1
                                    ? 'bg-accent-50 text-accent-600'
                                    : 'bg-emerald-50 text-emerald-600'
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span className="text-[11px] text-surface-600 leading-snug">{bullet}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-2 rounded-full bg-primary-200/60 overflow-hidden">
                          <div
                            className="h-full bg-primary-500 rounded-full"
                            style={{ width: `${72 + index * 4}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-surface-400 font-medium whitespace-nowrap">
                          {cap.category === 'Communication' ? 'Multi-channel' : 'Active'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
