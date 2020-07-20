import { Location } from '../store/location/types';

const randomLocation: Location[] = [
  {
    lat: 52.23,
    lon: 21.01,
    city: 'Warsaw',
    error: '',
  },
  {
    lat: 51.51,
    lon: -0.13,
    city: 'London',
    error: '',
  },
  {
    lat: 40.71,
    lon: -74.01,
    city: 'New York',
    error: '',
  },
  {
    lat: 34.05,
    lon: -118.24,
    city: 'Los Angeles',
    error: '',
  },
  {
    lat: 52.52,
    lon: 13.4,
    city: 'Berlin',
    error: '',
  },
  {
    lat: 48.14,
    lon: 11.58,
    city: 'Munich',
    error: '',
  },
  {
    lat: -33.87,
    lon: 151.21,
    city: 'Sydney',
    error: '',
  },
  {
    lat: 50.08,
    lon: 14.44,
    city: 'Prague',
    error: '',
  },
  {
    lat: -41.29,
    lon: 174.78,
    city: 'Wellington',
    error: '',
  },
  {
    lat: 39.9,
    lon: 116.41,
    city: 'Beijing',
    error: '',
  },
];

export const rngLocation = () => {
  const rngIndex = Math.floor(Math.random() * randomLocation.length);
  return randomLocation[rngIndex];
};
