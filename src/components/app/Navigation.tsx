import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

const Navigation: React.FC<RouteComponentProps | any> = props => {
  function isActive(s: string): string {
    return s === props.location.pathname ? 'active' : '';
  }

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to={'/'} className={`nav-link ${isActive('/')}`}>
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={'/favorites'}
          className={`nav-link ${isActive('/favorites')}`}
        >
          Favorites
        </Link>
      </li>
    </ul>
  );
};

export const NavigationTest = Navigation;

export default withRouter(Navigation);
