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

export interface WeatherTimepoint {
  cloudcover: number;
  lifted_index: number;
  prec_amount: number;
  prec_type: string;
  rh2m: string;
  temp2m: number;
  timepoint: number;
  weather: string;
  wind10m: { direction: string; speed: number };
}

export interface WeatherData {
  dataseries: WeatherTimepoint[];
}
