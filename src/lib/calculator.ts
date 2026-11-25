export function calculateEMI(
  principal: number,
  annualRate: number,
  years: number,
) {
  if (
    ![principal, annualRate, years].every(Number.isFinite) ||
    principal < 0 ||
    annualRate < 0 ||
    years <= 0
  )
    return { monthly: 0, interest: 0, total: 0 };
  const months = years * 12;
  const rate = annualRate / 1200;
  const monthly =
    rate === 0
      ? principal / months
      : (principal * rate) / -Math.expm1(-months * Math.log1p(rate));
  const total = monthly * months;
  return { monthly, interest: Math.max(0, total - principal), total };
}
export const formatINR = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
