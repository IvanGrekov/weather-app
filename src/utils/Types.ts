export enum ImageSizeType {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface WeatherStatus {
  main: string;
  description: string;
  icon: string;
}

interface BaseWeatherTimepoint {
  wind_speed: number;
  wind_deg: number;
  weather: [WeatherStatus];
}

export interface DayNightTemps {
  day: number;
  night: number;
}

export interface WeatherTimepoint extends BaseWeatherTimepoint {
  temp: DayNightTemps & {
    min: number;
    max: number;
    eve: number;
    morn: number;
  };
  pop: number;
}

export interface CurrentWeather extends BaseWeatherTimepoint {
  dt: number;
  temp: number;
  feels_like: number;
  humidity: number;
  visibility: number;
}

export interface WeatherData {
  timezone_offset: number;
  current: CurrentWeather;
  daily: WeatherTimepoint[];
}

export interface Address {
  address: {
    city: string;
    state: string;
    country: string;
  };
}

interface CoinsProperties {
  '01d': Function;
  '01n': Function;
  '02d': Function;
  '02n': Function;
  '03d': Function;
  '03n': Function;
  '04d': Function;
  '04n': Function;
  '09d': Function;
  '09n': Function;
  '10d': Function;
  '10n': Function;
  '11d': Function;
  '11n': Function;
  '13d': Function;
  '13n': Function;
  '50d': Function;
  '50n': Function;
}

export type Coins = CoinsProperties & {
  [key: string]: Function;
};

export type ReadableLocation = string;
