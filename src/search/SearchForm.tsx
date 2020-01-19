import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import SearchFormController, {
  ISearchFormProps,
  ISearchFormStateProps
} from './SearchFormController';
import FormError from './FormError';
import UserRepoList from '../repos/UserRepoList';

const SearchForm: React.FC<ISearchFormProps & ISearchFormStateProps> = ({
  loadUser,
  isLoading,
  error
}) => {
  const [username, setUsername] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    loadUser(username);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormError error={error} />
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Github username"
            onChange={handleChange}
          />
        </div>
        <button type={'submit'} className={'btn btn-primary btn-block'}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
      <UserRepoList username={username} />
    </>
  );
};

export default SearchFormController(SearchForm);
