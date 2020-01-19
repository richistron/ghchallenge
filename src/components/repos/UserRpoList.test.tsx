import React from 'react';
import { renderWithRedux } from '../app/App.test';
import UserRepoList from './UserRepoList';

const state = {
  repos: {
    favorites: {},
    username: 'richistron',
    repos: {
      richistron: [
        {
          id: 123,
          name: '001-richistron-BolsaDeTrabajo-PHP',
          full_name: 'richistron/001-richistron-BolsaDeTrabajo-PHP',
          owner: {
            avatar_url: 'http://example.com'
          }
        }
      ]
    }
  }
};

test('UserRepoList', () => {
  const { getByText, getByAltText } = renderWithRedux(
    <UserRepoList username={'richistron'} />,
    state
  );
  const repo = getByText('001-richistron-BolsaDeTrabajo-PHP');
  const img = getByAltText('001-richistron-BolsaDeTrabajo-PHP');
  expect(img).toHaveAttribute('src');
  expect(img).toBeInTheDocument();
  expect(repo).toBeInTheDocument();
});
