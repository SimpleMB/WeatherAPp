import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import WeatherTemplate from './templates/WeatherTemplate';
import LocationTemplate from './templates/LocationTemplate';
import { Location } from './store/location/types';
import { setLocation } from './store/location/actions';
import { RootState } from './store';

interface Props {
  location: Location;
  setLocation: (location: Location) => void;
}

const App: React.FC<Props> = (props) => {
  useEffect(() => {
    if (localStorage.location) props.setLocation(localStorage.location);
  }, [props]);

  return props.location.lat === 0 ? <LocationTemplate /> : <WeatherTemplate />;
};

const mapStateToProps = (state: RootState) => ({
  location: state.location,
});

export default connect(mapStateToProps, { setLocation })(App);
