export function getFormattedDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function getDateMinusDays(date: Date, days: number) {
  return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
}

export function isWithinDays(date: Date, days: number) {
  const today = new Date();
  const daysAgo = getDateMinusDays(today, days);
  return date >= daysAgo;
}
