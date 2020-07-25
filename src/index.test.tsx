import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Testing root index app rendering properly', () => {
  test('React renders provided component without crashing', () => {
    // eslint-disable-next-line
    require('./index.tsx');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
});
