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
  temp: number;
  feels_like: number;
}

export interface WeatherData {
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

export type ReadableLocation = string;
