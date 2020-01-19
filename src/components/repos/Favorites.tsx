import React from 'react';
import FavButton from './FavButton';
import FavoritesController, {
  IFavoritesStateProps,
  IFavoritesDispatchProps
} from './FavoritesController';
import FilterFavorites from './FilterFavorites';

const Favorites: React.FC<IFavoritesStateProps & IFavoritesDispatchProps> = ({
  repos,
  setFilter,
  favFilter
}) => {
  return (
    <div className={'Favorites row'}>
      <div className={'col'}>
        <FilterFavorites setFilter={setFilter} favFilter={favFilter} />
      </div>
      <div className={'w-100'} />
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
