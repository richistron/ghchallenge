import React from 'react';
import UserRepoListController, {
  IUserRepoListStateProps,
  IUserRepoListOwnProps
} from './UserRepoListController';
import './UserRepoList.scss';
import FavButton from './FavButton';

const UserRepoList: React.FC<IUserRepoListOwnProps &
  IUserRepoListStateProps> = ({ username, repos }) => {
  if (!username || repos.length === 0) {
    return null;
  }
  const [repo] = repos;
  return (
    <div className={'UserRepoList row'}>
      <div className={'col'}>
        <img
          className={'avatar img-thumbnail'}
          src={repo.owner.avatar_url}
          alt={repo.name}
        />
        {username}
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

export default UserRepoListController(UserRepoList);
