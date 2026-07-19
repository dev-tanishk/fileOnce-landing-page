import { featureGrid } from '../constants/features'

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">Features</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 tracking-tight">
            The Complete Compliance Operations Toolkit
          </h2>
          <p className="mt-4 text-surface-500 text-sm sm:text-base leading-relaxed">
            From the first document request to the final approval — every capability your firm needs
            to run a modern, scalable compliance practice. No bolt-ons. No workarounds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureGrid.map((f) => (
            <div
              key={f.title}
              className="group bg-white border border-surface-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:bg-primary-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold text-surface-900 mb-1.5">{f.title}</h3>
              <p className="text-xs text-surface-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            {
              label: 'Secure by design',
              desc: 'Tokenised upload links, encrypted storage, and firm-scoped data isolation.',
            },
            {
              label: 'Built for India',
              desc: 'ROC, KYC, GST, board resolutions — workflows that match how you actually work.',
            },
            {
              label: 'Scales with your firm',
              desc: 'From solo practitioner to enterprise team — plans that grow as you do.',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center px-4 py-5 rounded-xl bg-surface-50 border border-surface-200"
            >
              <p className="text-sm font-semibold text-surface-900">{item.label}</p>
              <p className="text-xs text-surface-500 mt-1.5 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
