import React from 'react';
import UserRepoList from './UserRepoList';
import { Link } from 'react-router-dom';

const UserDetail: React.FC<{
  match: { params: { username: string } };
}> = ({
  match: {
    params: { username }
  }
}) => {
  return (
    <>
      <Link to={'/'} className={'go-back'}>
        {'< Back'}
      </Link>
      <UserRepoList username={username} />
    </>
  );
};

export default UserDetail;
