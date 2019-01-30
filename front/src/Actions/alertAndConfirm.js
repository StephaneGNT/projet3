export const alert = message => ({
  type: 'ALERT',
  message,
});

export const confirm = (message, choice) => ({
  type: 'CONFIRM',
  message,
  choice,
});
