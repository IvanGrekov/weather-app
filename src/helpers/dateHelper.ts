import moment from 'moment';
import 'moment/locale/ru';

export const countDate = (timestampt: number, offset: number): number =>
  (timestampt + offset) * 1000;

export const getDayPart = (date: Date): string => {
  const hours = date.getUTCHours();

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

export const getReadableDate = (value: Date): string => {
  moment.locale('ru');

  const date = moment(value);
  const result = date.format('dd, DD.MM');

  return result.slice(0, 1).toUpperCase() + result.slice(1);
};
