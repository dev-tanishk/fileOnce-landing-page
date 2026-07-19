import { Link } from 'react-router-dom'
import { SALES_EMAIL, SUPPORT_EMAIL } from '../constants/emails'

export default function Footer() {
  return (
    <footer id="footer" className="bg-surface-900 border-t border-surface-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="FileOnce" className="w-10 h-10 object-contain" />
              <span className="text-lg font-bold text-white tracking-tight">
                File<span className="text-primary-400">Once</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-surface-300 leading-relaxed max-w-sm">
              Compliance request and document collection platform for{' '}
              <span className="text-primary-400 font-medium">compliance professionals</span>{' '}
              and teams across India.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-surface-800 rounded-xl p-4 border border-surface-700">
              <p className="text-[11px] font-semibold tracking-widest text-surface-400 uppercase mb-3">
                Get in Touch
              </p>
              <div className="space-y-2.5">
                <a href={`mailto:${SALES_EMAIL}`} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-primary-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-surface-500">Sales</p>
                    <span className="text-sm font-medium text-surface-200 group-hover:text-primary-400 transition-colors">
                      {SALES_EMAIL}
                    </span>
                  </div>
                </a>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-primary-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-surface-500">Support</p>
                    <span className="text-sm font-medium text-surface-200 group-hover:text-primary-400 transition-colors">
                      {SUPPORT_EMAIL}
                    </span>
                  </div>
                </a>
                <a href="tel:+917309301632" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-primary-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-surface-200 group-hover:text-primary-400 transition-colors">
                    +91 73093 01632
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Link to="/contact#plans" className="text-xs text-surface-400 hover:text-primary-400 transition-colors">
                Plans &amp; Demo
              </Link>
              <a href="#" className="text-xs text-surface-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-surface-400 hover:text-primary-400 transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-700/60">
          <p className="text-xs text-surface-500 text-center">
            © {new Date().getFullYear()} FileOnce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
