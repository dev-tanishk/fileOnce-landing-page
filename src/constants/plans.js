/** Shared plan copy for Pricing and Contact pages. */

export const plans = [
  {
    id: 'early-access',
    name: 'Early Access',
    status: 'available',
    monthly: '₹799',
    monthlyCompare: '₹1,999',
    monthlySavings: 60,
    quarterly: '₹2,099',
    quarterlyCompare: '₹5,399',
    quarterlySavings: 61,
    yearly: '₹7,999',
    yearlyCompare: '₹20,399',
    yearlySavings: 61,
    compareLabel: 'Enterprise',
    description:
      'Full Enterprise platform access at launch pricing. Ideal for compliance professionals joining our first cohort.',
    highlights: [
      'Unlimited clients at launch',
      'Unlimited compliance requests & secure upload links',
      'Dashboard with deadline & overdue tracking',
      'Unlimited manual email & WhatsApp reminders per day',
      'Automated email & WhatsApp deadline reminders',
      'All Enterprise features — no feature locks at launch',
      '1 user (team seats coming soon)',
    ],
  },
  {
    id: 'basic',
    name: 'Basic',
    status: 'coming-soon',
    monthly: '₹899',
    quarterly: '₹2,399',
    yearly: '₹8,999',
    description: 'For solo compliance professionals getting started with structured workflows.',
    highlights: [
      'Up to 50 active clients',
      'Unlimited requests & secure upload links',
      'Dashboard with deadline & overdue tracking',
      '25 manual email reminders per day',
      '25 manual WhatsApp reminders per day',
      'Initial request emails (not counted as reminders)',
      '1 user',
      'Standard email support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    status: 'coming-soon',
    monthly: '₹1,299',
    quarterly: '₹3,499',
    yearly: '₹12,999',
    description: 'For growing firms that need automation, more capacity, and team collaboration.',
    highlights: [
      'Up to 200 active clients',
      'Everything in Basic',
      '60 manual email reminders per day',
      '60 manual WhatsApp reminders per day',
      'Automated email & WhatsApp deadline reminders',
      '3–5 team users (coming soon)',
      'Priority email support & onboarding call',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    status: 'coming-soon',
    monthly: '₹1,999',
    quarterly: '₹5,399',
    yearly: '₹20,399',
    description: 'For larger compliance teams running at high volume with dedicated support.',
    highlights: [
      'Unlimited clients',
      'Everything in Professional',
      'Unlimited manual email reminders per day',
      'Unlimited manual WhatsApp reminders per day',
      'Automated email & WhatsApp deadline reminders',
      '10+ team users',
      'Dedicated onboarding, custom reminder rules & SLA support',
    ],
  },
]

export const earlyAccessPlan = plans.find((p) => p.id === 'early-access')

/** Reminder limits shown in the plan comparison footnote. */
export const reminderLimitsNote =
  'Manual reminder limits reset daily at midnight IST. Automated reminders do not count toward manual limits. Initial document-request emails when creating a request are not counted as reminders.'
