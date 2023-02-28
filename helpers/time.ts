const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const transformDateUS = (date: any) =>
  date.toLocaleDateString('en-US', options);

export const isoDateToUnix = (dateString: Date | string) => {
  const dateObj = new Date(dateString);

  const unixTimestamp = dateObj.getTime() / 1000;

  return unixTimestamp;
};
