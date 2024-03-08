export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function toMonthAndYear(date: Date): string {
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${month.slice(0, 3)} ${year}`;
}

export const dateToLocalDateType = (date: Date) => {
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  const strDay = day < 10 ? `0${day}` : `${day}`;
  const strMonth = month < 10 ? `0${month + 1}` : `${month + 1}`;

  return `${year}-${strMonth}-${strDay}`;
};
