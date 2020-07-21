import { initialLocationState } from '../store/location/reducers';
import { initialWeatherState } from '../store/weather/reducers';
import { RootState } from '../store';

export const mockedState: RootState = {
  location: { ...initialLocationState },
  weather: { ...initialWeatherState },
};
