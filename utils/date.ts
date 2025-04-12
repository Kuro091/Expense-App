export function getFormattedDate(date: Date | null | undefined) {
  if (!date || !(date instanceof Date) || isNaN(date?.getTime())) {
    return new Date().toISOString().split("T")[0];
  }
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function getDateMinusDays(date: Date | null | undefined, days: number) {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return new Date();
  }
  return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
}

export function isWithinDays(date: Date | null | undefined, days: number) {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return false;
  }
  const today = new Date();
  const daysAgo = getDateMinusDays(today, days);
  return date >= daysAgo;
}

export function isValidDate(date: Date | null | undefined): date is Date {
  return date instanceof Date && !isNaN(date.getTime());
}
