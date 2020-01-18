import React from 'react';
import { Route } from 'react-router-dom';
import SearchForm from '../search/SearchForm';

const Routes: React.FC = () => {
  return (
    <div className={'jumbotron'}>
      <Route path={'/'} component={SearchForm} />
    </div>
  );
};

export default Routes;
