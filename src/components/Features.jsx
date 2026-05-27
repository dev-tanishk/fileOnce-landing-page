const features = [
  { icon: '📋', title: 'Request Tracking', desc: 'Track every compliance request from creation to completion with real-time status updates.' },
  { icon: '📁', title: 'Client Document Collection', desc: 'Request and collect documents from clients through a streamlined digital process.' },
  { icon: '🔗', title: 'Secure Upload Links', desc: 'Generate unique, secure links for clients to upload documents directly.' },
  { icon: '📧', title: 'Email Reminders', desc: 'Automated email reminders for pending documents and approaching deadlines.' },
  { icon: '💬', title: 'WhatsApp Reminders', desc: 'Reach clients where they respond fastest with automated WhatsApp notifications.' },
  { icon: '📅', title: 'Deadline Monitoring', desc: 'Never miss a compliance deadline with proactive alerts and calendar tracking.' },
  { icon: '🔴', title: 'Overdue Visibility', desc: 'Instant visibility into overdue requests so nothing falls through the cracks.' },
  { icon: '📊', title: 'Centralized Dashboard', desc: 'One dashboard to monitor all clients, requests, documents, and deadlines.' },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">Features</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
            Everything You Need to Manage Compliance Requests
          </h2>
          <p className="mt-3 text-surface-500 text-sm sm:text-base">
            From request tracking to automated reminders — FileOnce gives your team the tools to operate efficiently.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="group bg-white border border-surface-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/40 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:bg-primary-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold text-surface-900 mb-1">{f.title}</h3>
              <p className="text-xs text-surface-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
