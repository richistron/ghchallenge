import React, { useState } from 'react';
import { IRepo } from '../../reducers/reposReducer';

const FavButton: React.FC<{ repo: IRepo }> = () => {
  const [fav, setFav] = useState<boolean>(false);
  const className = fav ? 'unfav' : 'fav';
  return (
    <span
      className={className}
      aria-label={className}
      role={'img'}
      onClick={() => setFav(!fav)}
    >
      ⭐
    </span>
  );
};

export default FavButton;
