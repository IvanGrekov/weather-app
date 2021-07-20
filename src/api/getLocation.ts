import GetLocation from 'react-native-get-location';
import { Position } from '../types';

export const getCurrentLocation = () => {
  return GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then((location: Position) => ({
      latitude: location.latitude,
      longitude: location.longitude,
    }))
    .catch(error => {
      console.error(error);

      return {
        latitude: 0,
        longitude: 0,
      };
    });
};
