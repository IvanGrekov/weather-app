export const getDayPart = (date: Date): string => {
  const hours = date.getUTCHours();

  console.log(hours);

  if (hours >= 23 || (hours > 0 && hours < 4)) {
    return 'Ночь';
  }

  if (hours >= 4 && hours < 11) {
    return 'Утро';
  }

  if (hours >= 11 && hours < 18) {
    return 'День';
  }

  if (hours >= 18 && hours < 23) {
    return 'Вечер';
  }

  return 'undefined';
};
