import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/rootReducer';

export function renderWithRedux(ui: any, state = {}) {
  const preloadedState = {
    repos: {
      username: '',
      repos: {},
      isLoading: false,
      error: null,
      favorites: {},
      favFilter: ''
    }
  };

  const store = createStore(rootReducer, { ...preloadedState, ...state });
  return {
    ...render(
      <Provider store={store}>
        <HashRouter>{ui}</HashRouter>
      </Provider>
    ),
    store
  };
}

test('App smoke test', () => {
  const { getByText } = renderWithRedux(<App />);
  const title = getByText('Github API Challenge');
  expect(title).toBeInTheDocument();
});
