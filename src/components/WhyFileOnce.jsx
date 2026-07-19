import { whyFileOnce } from '../constants/features'

export default function WhyFileOnce() {
  return (
    <section className="py-16 sm:py-24 bg-surface-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">Why FileOnce</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 tracking-tight">
              Not Another Generic Tool — a Compliance Operations Platform
            </h2>
            <p className="mt-4 text-surface-500 text-sm sm:text-base leading-relaxed">
              Project management apps weren&apos;t built for ROC filings. Document storage wasn&apos;t
              built for client follow-ups. FileOnce was engineered from day one for the specific,
              high-stakes workflows that Indian compliance professionals navigate every single day.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['ROC & KYC', 'GST Filings', 'Board Resolutions', 'Document Collection', 'Deadline Tracking'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="space-y-3">
            {whyFileOnce.map((r, i) => (
              <div
                key={r.title}
                className="bg-white border border-surface-200 rounded-xl p-4 flex items-start gap-3 hover:border-primary-200 hover:shadow-sm transition-all"
              >
                <div className="w-7 h-7 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary-600">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-surface-900">{r.title}</h3>
                  <p className="text-xs text-surface-500 mt-1 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
