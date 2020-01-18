import React from 'react';
import './UserRepoList.scss'
import {IRepo} from '../reducers/reposReducer';

const UserRepoList: React.FC<{username: string, repos: IRepo[]}> = ({username, repos}) => {
  if (!username || repos.length === 0) {
    return null;
  }
  return (
    <div className={'UserRepoList row'}>
      <div className={'col'}>
        <h6>
          {username}
        </h6>
      </div>
      <div className={'w-100'}/>
      <div className={'col'}>
      <ul className="list-group">
        {repos.map( repo => <li key={repo.id} className="list-group-item">{repo.name}</li>)}
      </ul>
      </div>
    </div>

  );
}

export default UserRepoList;