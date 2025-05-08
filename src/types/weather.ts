interface Coord {
  lon: number,
  lat: number
}

interface Weather {
  id: number,
  main: string,
  description: string,
  icon: string
}

type Base = string;

interface Main {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
  sea_level: number,
  grnd_level: number
}

type Visibility = number;

interface Wind {
  speed: number,
  deg: number
}

interface Clouds {
  all: number
}

type Dt = number;

interface Sys {
  type: number,
  id: number,
  country: string,
  sunrise: number,
  sunset: number
}

type Timezone = number;
type ID = number;
type Name = string;
type Cod = number;

export interface APIResponse {
  coord: Coord,
  weather: Weather[],
  base: Base,
  main: Main,
  visibility: Visibility,
  wind: Wind,
  clouds: Clouds,
  dt: Dt,
  sys: Sys,
  timezone: Timezone,
  id: ID,
  name: Name,
  cod: Cod
}