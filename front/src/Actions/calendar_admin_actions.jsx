export const insertAvailabilityDate = (date, color) => ({
  type: 'INSERT_DATE',
  date,
  color,
});

export const removeAvailabilityDate = (date, color) => ({
  type: 'REMOVE_DATE',
  date,
  color,
});
