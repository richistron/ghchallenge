import React from 'react';
import UserRepoListController, {
  IUserRepoListStateProps,
  IUserRepoListOwnProps
} from './UserRepoListController';
import { Link } from 'react-router-dom';

const UserRepoLink: React.FC<IUserRepoListOwnProps &
  IUserRepoListStateProps> = ({ username, repos }) => {
  if (!username || repos.length === 0) {
    return null;
  }
  const [repo] = repos;
  return (
    <Link to={`/user/${username}`}>
      <div className={'UserRepoList row'}>
        <div className={'col'}>
          <img
            className={'avatar img-thumbnail'}
            src={repo.owner.avatar_url}
            alt={repo.name}
          />
          {username}
        </div>
      </div>
    </Link>
  );
};

export default UserRepoListController(UserRepoLink);
