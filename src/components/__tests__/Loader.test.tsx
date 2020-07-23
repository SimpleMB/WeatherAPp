import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader component testing', () => {
  test('renders Loader component', () => {
    render(<Loader />);

    expect(screen.getByAltText(/loading gif icon/)).toBeInTheDocument();
  });
});
