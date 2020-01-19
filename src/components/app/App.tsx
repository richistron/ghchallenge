import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.scss';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <div className="application">
      <HashRouter>
        <h4>Github API Challenge</h4>
        <Routes />
      </HashRouter>
    </div>
  );
};

export default App;
