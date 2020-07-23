import React from 'react';
import { render, screen } from '@testing-library/react';
import ForcastDay from '../ForcastDay';

const mockDay = {
  dt: 343434,
  temp: {
    day: 301.4,
    min: 295.71,
    max: 304.09,
    night: 295.71,
  },
  humidity: 76,
  wind_speed: 3.8,
  weather: [
    {
      id: 502,
      main: 'Rain',
      description: 'heavy intensity rain',
      icon: '10d',
    },
  ],
};

describe('ForcastDay component testing', () => {
  test('renders ForcastDay component with provided props', () => {
    render(<ForcastDay day={mockDay} index={1} timezoneOffset={1000} />);

    expect(screen.getByText(/heavy intensity rain/i)).toBeInTheDocument();
  });

  test('renders img file with proper weather', () => {
    render(<ForcastDay day={mockDay} index={1} timezoneOffset={1000} />);

    expect(
      screen.getByTestId(String(mockDay.weather[0].id))
    ).toBeInTheDocument();
  });
});
