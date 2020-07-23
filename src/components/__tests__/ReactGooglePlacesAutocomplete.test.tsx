import React from 'react';
import { render, screen } from '@testing-library/react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const changeLocation = jest.fn();

const testClass = 'testClassName';

describe('GoolgePlacesAutocomplete component testing', () => {
  test('renders GoolgePlacesAutocomplete component with provided props', () => {
    render(
      <GooglePlacesAutocomplete
        inputClassName={testClass}
        apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY}
        onSelect={changeLocation}
        loader={<div />}
      />
    );

    expect(screen.getByRole('textbox')).toHaveClass(testClass);
  });
});
