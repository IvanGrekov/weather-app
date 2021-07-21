import GetLocation from 'react-native-get-location';

import { initialLocation } from '../initialData';
import { Position } from '../types';

const sendLocationQuery = () =>
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  });

export const getCurrentLocation = () =>
  sendLocationQuery()
    .then((location: Position) => ({
      latitude: location.latitude,
      longitude: location.longitude,
    }))
    .catch(error => {
      console.warn('Error was caught during getting current location');
      console.error(error);

      return initialLocation;
    });
