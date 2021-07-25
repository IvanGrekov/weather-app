import { CurrentWeather, WeatherTimepoint } from './Types';

export const initialCurrentWeather: CurrentWeather = {
  dt: 0,
  temp: 0,
  wind_speed: 0,
  wind_deg: 0,
  feels_like: 0,
  humidity: 0,
  visibility: 0,
  weather: [
    {
      main: 'undefined',
      description: 'undefined',
      icon: 'undefined',
    },
  ],
};

export const initialDailyWeather: WeatherTimepoint[] = [
  {
    dt: 0,
    temp: {
      day: 0,
      min: 0,
      max: 0,
      night: 0,
      eve: 0,
      morn: 0,
    },
    wind_speed: 0,
    wind_deg: 0,
    weather: [
      {
        main: 'undefined',
        description: 'undefined',
        icon: 'undefined',
      },
    ],
    pop: 0,
  },
];

export const initialReadableLocation = {
  city: 'undefined',
  state: 'undefined',
  country: 'undefined',
};

export const initialLocation = {
  latitude: 0,
  longitude: 0,
};
