import React from 'react';
import { connect } from 'react-redux';
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from 'react-google-places-autocomplete';
import { setLocation } from '../store/location/actions';
import { Location } from '../store/location/types';
import style from './ChooseLocation.module.scss';

interface LocationTemplateProps {
  setLocation: (location: Location) => void;
}

const ChooseLocation: React.FC<LocationTemplateProps> = (props) => {
  type Result = {
    place_id: string;
    description: string;
  };
  const changeLocation = async (result: Result) => {
    const location = await geocodeByPlaceId(result.place_id);
    const { lat, lng } = await getLatLng(location[0]);
    props.setLocation({
      lat,
      lon: lng,
      city: result.description,
      error: '',
    });
  };

  const suggestionsClassNames = {
    container: style.GPAcontainer,
    suggestion: style.GPAsuggestion,
    suggestionActive: style.GPAactive,
  };

  const autocompletionRequest = {
    types: ['(cities)'] as ['(cities)'],
  };

  return (
    <section className={style.chooseLocation}>
      <h1 className={style.title}>
        When the bloody hell is it going to stop raining...{' '}
        <span className={style.titleSpan}>app</span>
      </h1>
      <div className="searchLocation">
        <label htmlFor="input-location" className={style.labelLocation}>
          {' '}
          send <span className={style.labelHeart}>❤</span> and 🌤 to this
          location:
        </label>
        <GooglePlacesAutocomplete
          inputClassName={style.inputLocation}
          apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY}
          onSelect={changeLocation}
          suggestionsClassNames={suggestionsClassNames}
          autocompletionRequest={autocompletionRequest}
          loader={<div />}
        />
      </div>
    </section>
  );
};

export default connect(null, { setLocation })(ChooseLocation);
