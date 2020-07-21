import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Alert from '../Alert';
import { initialWeatherState } from '../../store/weather/reducers';

const mockStore = configureStore([]);

describe('testing Alert component', () => {
  test('renders Alert component', () => {
    const store = mockStore({
      weather: { ...initialWeatherState },
    });
    render(
      <Provider store={store}>
        <Alert />
      </Provider>
    );
  });

  test('renders "Sample error" in Alert component', () => {
    const store = mockStore({
      weather: { ...initialWeatherState, error: 'Sample error' },
    });
    render(
      <Provider store={store}>
        <Alert />
      </Provider>
    );
    expect(screen.getByText(/Sample error/)).toBeInTheDocument();
  });
});
