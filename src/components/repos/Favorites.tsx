import React from 'react';
import FavButton from './FavButton';
import FavoritesController, {
  IFavoritesStateProps
} from './FavoritesController';

const Favorites: React.FC<IFavoritesStateProps> = ({ repos }) => {
  return (
    <div className={'Favorites row'}>
      <div className={'col'}>
        <ul className="list-group">
          {repos.map(repo => (
            <li key={repo.id} className="list-group-item">
              {repo.name}
              <FavButton repo={repo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoritesController(Favorites);
