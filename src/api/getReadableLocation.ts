import { initialReadableLocation } from '../utils/InitialData';

const base_URL = 'https://us1.locationiq.com/v1/reverse.php';
const API_key = 'pk.a6734750c071fa9e35042d9f0666bb68';
const searchParams = `?key=${API_key}&zoom=10&format=json`;

export const getReadableLocation = (latitude: number, longitude: number) => {
  const url = `${base_URL}${searchParams}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.warn('Error was caught during getting readable location');

      console.error(error);

      return {
        address: initialReadableLocation,
      };
    });
};
