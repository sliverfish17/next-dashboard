const US_OPTIONS = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
} as const;

const MONTH_OPTIONS = {
  month: 'short',
} as const;

export const transformDateUS = (date: Date) =>
  date.toLocaleDateString('en-US', US_OPTIONS);

export const transformMonth = (date: Date) =>
  date.toLocaleDateString('en-US', MONTH_OPTIONS);

export const isoDateToUnix = (dateString: Date | string) => {
  const dateObj = new Date(dateString);

  const unixTimestamp = dateObj.getTime() / 1000;

  return unixTimestamp;
};
