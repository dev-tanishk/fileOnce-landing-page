const reasons = [
  { title: 'Built for Indian Compliance', desc: 'Designed specifically for CS, CA, and compliance requests unique to India.' },
  { title: 'Operational Clarity', desc: 'No more guesswork — see exactly what\'s pending, overdue, or complete.' },
  { title: 'Simplifies Client Coordination', desc: 'One platform to manage all client interactions and document collection.' },
  { title: 'Improves Team Productivity', desc: 'Spend time on advisory, not administration and manual follow-ups.' },
  { title: 'Modern Alternative', desc: 'Replace the Excel + WhatsApp tracking patchwork with a purpose-built tool.' },
]

export default function WhyFileOnce() {
  return (
    <section className="py-16 sm:py-24 bg-surface-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">Why FileOnce</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
              Purpose-Built for Compliance Operations
            </h2>
            <p className="mt-4 text-surface-500 text-sm sm:text-base leading-relaxed">
              FileOnce isn't a generic project management tool. It's built from the ground up for the specific needs of Indian compliance professionals who need clarity, control, and speed.
            </p>
          </div>

          <div className="space-y-3">
            {reasons.map((r, i) => (
              <div key={r.title} className="bg-white border border-surface-200 rounded-xl p-4 flex items-start gap-3 hover:border-primary-200 transition-colors">
                <div className="w-7 h-7 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary-600">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-surface-900">{r.title}</h3>
                  <p className="text-xs text-surface-500 mt-0.5 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
