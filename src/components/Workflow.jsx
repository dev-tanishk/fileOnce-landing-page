const steps = [
  { num: '01', title: 'Create Request', desc: 'Define compliance tasks and assign to clients', icon: '📋' },
  { num: '02', title: 'Request Documents', desc: 'Send secure collection links to clients', icon: '📤' },
  { num: '03', title: 'Send Reminders', desc: 'Automated follow-ups via email & WhatsApp', icon: '🔔' },
  { num: '04', title: 'Track Status', desc: 'Monitor progress in real-time dashboard', icon: '📊' },
  { num: '05', title: 'Complete Request', desc: 'Mark done when all documents are collected', icon: '✅' },
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">How It Works</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
            Simple Process. Powerful Results.
          </h2>
          <p className="mt-3 text-surface-500 text-sm sm:text-base">
            Five steps to go from compliance chaos to operational clarity.
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connector Line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200" />

          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center w-1/5 px-2">
              <div className="w-12 h-12 bg-white border-2 border-primary-300 rounded-2xl flex items-center justify-center text-xl mb-4 relative z-10 shadow-sm">
                {step.icon}
              </div>
              <span className="text-[10px] font-bold text-primary-500 tracking-wider mb-1">STEP {step.num}</span>
              <h3 className="text-sm font-semibold text-surface-900 mb-1">{step.title}</h3>
              <p className="text-xs text-surface-500 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute top-6 -right-2 text-primary-300 z-10 hidden lg:block">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Flow */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-primary-50 border border-primary-200 rounded-xl flex items-center justify-center text-lg">
                  {step.icon}
                </div>
                {i < steps.length - 1 && <div className="w-0.5 h-8 bg-primary-200 mt-2" />}
              </div>
              <div className="pt-1">
                <span className="text-[10px] font-bold text-primary-500 tracking-wider">STEP {step.num}</span>
                <h3 className="text-sm font-semibold text-surface-900">{step.title}</h3>
                <p className="text-xs text-surface-500 mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
