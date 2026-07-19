import { Link } from 'react-router-dom'
import { EARLY_ACCESS_PATH } from '../constants/app'
import { platformTagline } from '../constants/features'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/40 via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-sm font-semibold text-primary-700 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-subtle-pulse" />
            Built for Compliance Professionals
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-900 leading-tight tracking-tight animate-fade-in-up animation-delay-100">
            The Compliance Operations Platform{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Indian Firms Deserve.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-base sm:text-lg text-surface-500 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {platformTagline} Track every request, collect documents effortlessly,
            and automate client follow-ups — so your team spends time on compliance, not coordination.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up animation-delay-300">
            <Link
              to={EARLY_ACCESS_PATH}
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Early Access
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="#workflow"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-surface-700 bg-white border border-surface-200 rounded-xl hover:border-surface-300 hover:bg-surface-50 transition-all duration-200"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-14 sm:mt-18 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
          <div className="bg-white rounded-2xl border border-surface-200 shadow-xl shadow-surface-200/30 overflow-hidden">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-50 border-b border-surface-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-surface-300" />
                <div className="w-3 h-3 rounded-full bg-surface-300" />
                <div className="w-3 h-3 rounded-full bg-surface-300" />
              </div>
              <div className="flex-1 mx-8">
                <div className="bg-surface-100 rounded-md px-3 py-1 text-xs text-surface-400 text-center max-w-xs mx-auto">
                  app.fileonce.in/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 sm:p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-sm font-semibold text-surface-900">Compliance Dashboard</h3>
                  <p className="text-xs text-surface-400 mt-0.5">May 2026 · 24 active requests</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 bg-danger/10 text-danger font-semibold rounded-full">4 Overdue</span>
                  <span className="text-xs px-2.5 py-1 bg-warning/10 text-warning font-semibold rounded-full">8 Pending</span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { label: 'Active Requests', value: '24', color: 'text-accent-600', bg: 'bg-accent-50' },
                  { label: 'Docs Pending', value: '12', color: 'text-warning', bg: 'bg-amber-50' },
                  { label: 'Overdue', value: '4', color: 'text-danger', bg: 'bg-red-50' },
                  { label: 'Completed', value: '38', color: 'text-primary-600', bg: 'bg-primary-50' },
                ].map((stat) => (
                  <div key={stat.label} className={`${stat.bg} rounded-xl p-3`}>
                    <p className="text-xs text-surface-500">{stat.label}</p>
                    <p className={`text-xl font-bold ${stat.color} mt-0.5`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Workflow Table */}
              <div className="border border-surface-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-surface-50 text-xs font-semibold text-surface-500 border-b border-surface-200">
                  <span className="col-span-3">Client</span>
                  <span className="col-span-3">Request</span>
                  <span className="col-span-2">Status</span>
                  <span className="col-span-2">Deadline</span>
                  <span className="col-span-2">Docs</span>
                </div>
                {[
                  { client: 'Mehta & Co.', workflow: 'Annual ROC Filing', status: 'Overdue', statusColor: 'bg-danger/10 text-danger', deadline: 'May 20', docs: '2/5' },
                  { client: 'Sharma Exports', workflow: 'DIR-3 KYC', status: 'In Progress', statusColor: 'bg-accent-50 text-accent-600', deadline: 'May 28', docs: '3/4' },
                  { client: 'Patel Industries', workflow: 'GST Return', status: 'Pending', statusColor: 'bg-warning/10 text-warning', deadline: 'Jun 01', docs: '0/3' },
                  { client: 'Gupta Legal', workflow: 'Board Resolution', status: 'Complete', statusColor: 'bg-primary-50 text-primary-600', deadline: 'May 15', docs: '4/4' },
                ].map((row) => (
                  <div key={row.client} className="grid grid-cols-12 gap-2 px-4 py-3 text-xs border-b border-surface-100 last:border-0 hover:bg-surface-50/50 transition-colors">
                    <span className="col-span-3 font-medium text-surface-800 truncate">{row.client}</span>
                    <span className="col-span-3 text-surface-600 truncate">{row.workflow}</span>
                    <span className="col-span-2">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </span>
                    <span className="col-span-2 text-surface-500">{row.deadline}</span>
                    <span className="col-span-2 text-surface-500">{row.docs}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
