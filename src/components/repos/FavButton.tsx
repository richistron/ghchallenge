import React from 'react';
import FavButtonController, {
  FavButtonOwnProps,
  FavButtonDispatchProps,
  FavButtonStateProps
} from './FavButtonController';

const FavButton: React.FC<FavButtonOwnProps &
  FavButtonDispatchProps &
  FavButtonStateProps> = ({ removeFav, fav, addFav, repo }) => {
  const className = fav ? 'unfav' : 'fav';
  return (
    <span
      className={className}
      aria-label={className}
      role={'img'}
      onClick={() => {
        if (fav) {
          removeFav(repo.id);
        } else {
          addFav(repo.id);
        }
      }}
    >
      ⭐
    </span>
  );
};

export default FavButtonController(FavButton);
