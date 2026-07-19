export function formatInr(paise) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(paise / 100);
}

export function cyclePricing(plan, cycleId) {
  if (!plan) {
    return { amount: 0, compare: null, savings: 0, comparePlanName: null };
  }
  const keyMap = {
    MONTHLY: ['monthlyAmountPaise', 'monthlyCompareAmountPaise', 'monthlySavingsPercent'],
    QUARTERLY: ['quarterlyAmountPaise', 'quarterlyCompareAmountPaise', 'quarterlySavingsPercent'],
    YEARLY: ['yearlyAmountPaise', 'yearlyCompareAmountPaise', 'yearlySavingsPercent'],
  };
  const [amountKey, compareKey, savingsKey] = keyMap[cycleId] || keyMap.MONTHLY;
  return {
    amount: plan[amountKey],
    compare: plan[compareKey] ?? null,
    savings: plan[savingsKey] ?? 0,
    comparePlanName: plan.comparePlanName ?? 'Enterprise',
  };
}
