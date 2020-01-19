import React from 'react';
import { Route } from 'react-router-dom';
import SearchForm from '../repos/SearchForm';
import UserDetail from '../repos/UserDetail';
import Favorites from '../repos/Favorites';

const Routes: React.FC = () => {
  return (
    <div className={'jumbotron'}>
      <Route path={'/'} component={SearchForm} exact />
      <Route path={'/user/:username'} component={UserDetail} exact />
      <Route path={'/favorites'} component={Favorites} exact />
    </div>
  );
};

export default Routes;
