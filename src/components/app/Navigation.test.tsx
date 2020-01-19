import React from 'react';
import { NavigationTest } from './Navigation';
import { renderWithRedux } from './App.test';

test('Search Button is active', () => {
  const { getByText } = renderWithRedux(
    <NavigationTest location={{ pathname: '/' }} />
  );
  const linkSearch = getByText('Search');
  const linkFavorites = getByText('Favorites');
  expect(linkSearch).toBeInTheDocument();
  expect(linkSearch).toHaveClass('active');
  expect(linkFavorites).toBeInTheDocument();
  expect(linkFavorites).not.toHaveClass('active');
});
