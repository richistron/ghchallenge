import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/rootReducer';

export function renderWithRedux(ui: any) {
  const store = createStore(rootReducer);
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
