export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-surface-900 to-surface-800 rounded-3xl p-8 sm:p-14 text-center overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Spend Less Time Following Up.{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Spend More Time Growing Your Practice.
              </span>
            </h2>
            <p className="mt-4 text-surface-400 text-sm sm:text-base max-w-lg mx-auto">
              Join compliance teams who've replaced spreadsheet chaos with streamlined requests. See FileOnce in action.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:tanishk.tripathi@fileonce.in?subject=Demo%20Request"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-surface-900 bg-white rounded-xl hover:bg-surface-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:tanishk.tripathi@fileonce.in"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-surface-300 border border-surface-700 rounded-xl hover:border-surface-500 hover:text-white transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
