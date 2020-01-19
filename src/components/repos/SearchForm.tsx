import React, { ChangeEvent, SyntheticEvent } from 'react';
import SearchFormController, {
  ISearchFormProps,
  ISearchFormStateProps
} from './SearchFormController';
import FormError from './FormError';
import UserRepoLink from './UserRepoLink';

const SearchForm: React.FC<ISearchFormProps & ISearchFormStateProps> = ({
  loadUser,
  isLoading,
  setUser,
  error,
  username
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
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
            defaultValue={username}
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
      <UserRepoLink username={username} />
    </>
  );
};

export default SearchFormController(SearchForm);
