export default function Reminders() {
  return (
    <section className="py-16 sm:py-24 bg-surface-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">Communication Engine</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 tracking-tight">
              Dual-Channel Outreach That Actually Gets Responses
            </h2>
            <p className="mt-4 text-surface-500 text-sm sm:text-base leading-relaxed">
              Indian clients live on WhatsApp. Compliance correspondence lives in email. FileOnce
              orchestrates both — firm-branded, context-aware, and precisely timed — so your
              follow-ups land where they&apos;re seen, not where they&apos;re ignored.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: 'Manual precision',
                  desc: 'One-click reminders on any plan — email and WhatsApp dispatched instantly with full document context.',
                },
                {
                  title: 'Automated scale',
                  desc: 'Professional & Enterprise plans run scheduled deadline nudges across your entire portfolio — hands-free.',
                },
                {
                  title: 'Firm-branded touchpoints',
                  desc: 'Every outbound message carries your firm name — professional, consistent, and trustworthy.',
                },
                {
                  title: 'Intelligent limits',
                  desc: 'Daily quotas scale with your plan (25 → 60 → unlimited) so operations stay predictable at every tier.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-900">{item.title}</p>
                    <p className="text-xs text-surface-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-lg shadow-surface-200/20">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-sm font-semibold text-surface-900">Reminder Activity</h3>
                <p className="text-[11px] text-surface-400 mt-0.5">Multi-channel delivery log</p>
              </div>
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">Today</span>
            </div>
            <div className="space-y-3">
              {[
                { channel: '📧 Email', client: 'Mehta & Co.', doc: 'PAN Card Copy', time: '10:30 AM', status: 'Delivered' },
                { channel: '💬 WhatsApp', client: 'Sharma Exports', doc: 'Board Resolution', time: '11:15 AM', status: 'Read' },
                { channel: '📧 Email', client: 'Patel Industries', doc: 'GST Certificate', time: '2:00 PM', status: 'Scheduled' },
                { channel: '💬 WhatsApp', client: 'Gupta Legal', doc: 'DIR-3 KYC Form', time: '3:30 PM', status: 'Scheduled' },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-surface-50 rounded-xl border border-surface-100">
                  <span className="text-sm">{r.channel}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-surface-800 truncate">{r.client}</p>
                    <p className="text-[11px] text-surface-400 truncate">{r.doc}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[11px] text-surface-400">{r.time}</p>
                    <span className={`text-[10px] font-semibold ${
                      r.status === 'Read' ? 'text-primary-600' :
                      r.status === 'Delivered' ? 'text-accent-600' : 'text-surface-400'
                    }`}>{r.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-surface-100 flex items-center justify-between text-xs">
              <span className="text-surface-500">12 reminders dispatched today</span>
              <span className="text-emerald-600 font-semibold">7 email · 5 WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
