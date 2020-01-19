import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.scss';
import Routes from './Routes';
import Navigation from './Navigation';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="application">
        <h4>Github API Challenge</h4>
        <Navigation />
        <Routes />
      </div>
    </HashRouter>
  );
};

export default App;
