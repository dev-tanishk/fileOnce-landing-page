const benefits = [
  { icon: '⚡', title: 'Reduce Operational Overhead', desc: 'Eliminate repetitive manual tasks that eat into your productive hours.' },
  { icon: '⏱️', title: 'Save Follow-up Time', desc: 'Automated reminders replace hours of manual client chasing every week.' },
  { icon: '👁️', title: 'Improve Compliance Visibility', desc: 'See every request status at a glance — nothing slips through unnoticed.' },
  { icon: '📈', title: 'Handle More Clients', desc: 'Scale your client base without proportionally scaling your operations team.' },
  { icon: '🎯', title: 'Focus on Higher-Value Work', desc: 'Free your team from admin overhead so they can focus on advisory and strategy.' },
  { icon: '🚀', title: 'Maximize Efficiency', desc: 'Streamlined operations mean better margins and faster turnaround times.' },
]

export default function Impact() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">Business Impact</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
            Handle More Clients Without Operational Chaos
          </h2>
          <p className="mt-3 text-surface-500 text-sm sm:text-base">
            FileOnce transforms how compliance firms operate — from reactive firefighting to proactive request management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="bg-gradient-to-br from-white to-primary-50/30 border border-surface-200 rounded-xl p-5 hover:border-primary-200 hover:shadow-md transition-all duration-300">
              <span className="text-2xl mb-3 block">{b.icon}</span>
              <h3 className="text-sm font-semibold text-surface-900 mb-1">{b.title}</h3>
              <p className="text-xs text-surface-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
