export default function Dashboard() {
  return (
    <section id="dashboard" className="py-16 sm:py-24 bg-surface-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">Dashboard</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
            Your Compliance Command Center
          </h2>
          <p className="mt-3 text-surface-500 text-sm sm:text-base">
            One centralized view to monitor every request, deadline, and document across all your clients.
          </p>
        </div>

        <div className="bg-white border border-surface-200 rounded-2xl shadow-xl shadow-surface-200/30 overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200">
            <div className="flex items-center gap-3">
              <img src="/fileonce-landing/logo.png" alt="FileOnce" className="w-7 h-7 object-contain" />
              <span className="text-sm font-semibold text-surface-800">FileOnce Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-surface-100 rounded-full flex items-center justify-center text-xs">🔔</div>
              <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center text-xs font-semibold text-primary-700">RS</div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {[
                { label: 'Total Clients', value: '42', change: '+3 this month', color: 'text-surface-800', bg: 'bg-surface-50', border: 'border-surface-200' },
                { label: 'Active Requests', value: '24', change: '8 due this week', color: 'text-accent-600', bg: 'bg-accent-50', border: 'border-accent-200' },
                { label: 'Overdue Items', value: '4', change: 'Needs attention', color: 'text-danger', bg: 'bg-red-50', border: 'border-red-200' },
                { label: 'Docs Collected', value: '156', change: '12 pending', color: 'text-primary-600', bg: 'bg-primary-50', border: 'border-primary-200' },
              ].map((card) => (
                <div key={card.label} className={`${card.bg} border ${card.border} rounded-xl p-4`}>
                  <p className="text-xs text-surface-500 mb-1">{card.label}</p>
                  <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
                  <p className="text-[11px] text-surface-400 mt-1">{card.change}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              {/* Upcoming Deadlines */}
              <div className="lg:col-span-2 border border-surface-200 rounded-xl overflow-hidden">
                <div className="px-4 py-3 bg-surface-50 border-b border-surface-200 flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-surface-700">Upcoming Deadlines</h3>
                  <span className="text-[10px] text-surface-400">Next 7 days</span>
                </div>
                <div className="divide-y divide-surface-100">
                  {[
                    { client: 'Mehta & Co.', task: 'Annual ROC Filing', date: 'May 28', urgency: 'high', docs: '2/5' },
                    { client: 'Sharma Exports', task: 'DIR-3 KYC Submission', date: 'May 30', urgency: 'medium', docs: '3/4' },
                    { client: 'Patel Industries', task: 'GST Return Filing', date: 'Jun 01', urgency: 'medium', docs: '1/3' },
                    { client: 'Raj Enterprises', task: 'Board Meeting Minutes', date: 'Jun 02', urgency: 'low', docs: '0/2' },
                    { client: 'Gupta Legal', task: 'Compliance Certificate', date: 'Jun 03', urgency: 'low', docs: '4/4' },
                  ].map((item) => (
                    <div key={item.client} className="px-4 py-3 flex items-center gap-3 hover:bg-surface-50/50 transition-colors">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        item.urgency === 'high' ? 'bg-danger' :
                        item.urgency === 'medium' ? 'bg-warning' : 'bg-primary-400'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-surface-800 truncate">{item.client}</p>
                        <p className="text-[11px] text-surface-400 truncate">{item.task}</p>
                      </div>
                      <span className="text-[11px] text-surface-500 flex-shrink-0">{item.docs} docs</span>
                      <span className="text-[11px] text-surface-400 flex-shrink-0 w-14 text-right">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-4">
                {/* Pending Uploads */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-surface-50 border-b border-surface-200">
                    <h3 className="text-xs font-semibold text-surface-700">Pending Uploads</h3>
                  </div>
                  <div className="p-3 space-y-2">
                    {[
                      { doc: 'PAN Card - Mehta & Co.', days: '3 days ago' },
                      { doc: 'GST Certificate - Patel Ind.', days: '1 day ago' },
                      { doc: 'Board Resolution - Raj Ent.', days: 'Today' },
                    ].map((d) => (
                      <div key={d.doc} className="flex items-center gap-2 p-2 bg-warning/5 rounded-lg">
                        <span className="text-xs">📄</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-medium text-surface-700 truncate">{d.doc}</p>
                          <p className="text-[10px] text-surface-400">{d.days}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reminder Status */}
                <div className="border border-surface-200 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-surface-50 border-b border-surface-200">
                    <h3 className="text-xs font-semibold text-surface-700">Reminders Sent</h3>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-surface-500">Today</span>
                      <span className="text-lg font-bold text-primary-600">12</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-primary-50 rounded-lg p-2 text-center">
                        <p className="text-sm font-bold text-primary-600">7</p>
                        <p className="text-[10px] text-surface-400">Email</p>
                      </div>
                      <div className="flex-1 bg-green-50 rounded-lg p-2 text-center">
                        <p className="text-sm font-bold text-green-600">5</p>
                        <p className="text-[10px] text-surface-400">WhatsApp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
