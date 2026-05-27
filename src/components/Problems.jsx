const painPoints = [
  {
    icon: '📄',
    title: 'Chasing Clients for Documents',
    desc: 'Endless back-and-forth on email and WhatsApp just to collect basic documents from clients.',
  },
  {
    icon: '⏰',
    title: 'Missed Follow-ups & Deadlines',
    desc: 'Critical compliance deadlines slip through the cracks when tracking is manual.',
  },
  {
    icon: '💬',
    title: 'Scattered WhatsApp Communication',
    desc: 'Important client requests lost across personal and group WhatsApp chats.',
  },
  {
    icon: '📊',
    title: 'Excel Tracking Chaos',
    desc: 'Spreadsheets that are always outdated, hard to share, and impossible to scale.',
  },
  {
    icon: '⚠️',
    title: 'Overdue Compliance Requests',
    desc: 'No visibility into which requests are pending, overdue, or at risk of penalties.',
  },
  {
    icon: '🔔',
    title: 'Manual Reminder Fatigue',
    desc: 'Wasting hours every week sending the same reminders to clients manually.',
  },
]

export default function Problems() {
  return (
    <section className="py-16 sm:py-24 bg-surface-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-danger uppercase">The Problem</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
            Compliance Teams Are Drowning in Manual Work
          </h2>
          <p className="mt-3 text-surface-500 text-sm sm:text-base">
            Most firms still rely on spreadsheets, WhatsApp messages, and manual follow-ups to manage compliance requests.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((item) => (
            <div key={item.title} className="group bg-white border border-surface-200 rounded-xl p-5 hover:border-danger/30 hover:shadow-md hover:shadow-danger/5 transition-all duration-300">
              <div className="w-9 h-9 bg-danger/8 rounded-lg flex items-center justify-center text-lg mb-3 group-hover:bg-danger/12 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-surface-900 mb-1">{item.title}</h3>
              <p className="text-xs text-surface-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
