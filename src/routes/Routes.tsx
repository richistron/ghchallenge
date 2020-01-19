import React from 'react';
import { Route } from 'react-router-dom';
import SearchForm from '../search/SearchForm';
import UserDetail from '../user/UserDetail';

const Routes: React.FC = () => {
  return (
    <div className={'jumbotron'}>
      <Route path={'/'} component={SearchForm} />
      <Route path={'/user/:username'} component={UserDetail} />
    </div>
  );
};

export default Routes;
