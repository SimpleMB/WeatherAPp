import React from 'react';
import { render, screen } from '@testing-library/react';
import Temperature from '../Temperature';

describe('Temperature component testing', () => {
  test('renders Temperature component with provided props', () => {
    render(<Temperature units="imperial" temp={296.66} />);
  });

  test('Temperature component have imperial type of degrees', () => {
    render(<Temperature units="imperial" temp={296.66} />);

    expect(screen.getByText(/Fahrenheit/)).toBeInTheDocument();
  });

  test('Temperature component have metric type of degrees', () => {
    render(<Temperature units="metric" temp={296.66} />);

    expect(screen.getByText(/Celsius/)).toBeInTheDocument();
  });
});
