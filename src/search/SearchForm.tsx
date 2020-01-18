import React, { SyntheticEvent, useEffect, useState } from 'react';
import SearchFormController, {
  ISearchFormProps,
  ISearchFormStateProps
} from './SearchFormController';
import UserRepoList from '../repos/UserRepoList';

const SearchForm: React.FC<ISearchFormProps & ISearchFormStateProps> = ({
                                                                          loadUser,
                                                                          isLoading,
                                                                          error,
                                                                          clearSearch,
  repos,
                                                                        }) => {
  const [username, setUsername] = useState<string>('');
  const [showError, setError] = useState<boolean>(false);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    loadUser(username);
  };
  const handleClearSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    setUsername('');
    clearSearch()
  };
  useEffect(() => {
    let errorTimer: any = null;
    if (error) {
      setError(true);
      errorTimer = setTimeout(() => setError(false), 5000);
    }
    return () => {
      if (errorTimer) {
        clearTimeout(errorTimer);
      }
    };
  }, [error]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        {showError && (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>{error}</strong>.
            <button
              onClick={e => {
                e.preventDefault();
                setError(false);
              }}
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Github username"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        <button type="button" className="btn btn-secondary btn-block" onClick={handleClearSearch}>
          Clear
        </button>
      </form>
      <UserRepoList username={username} repos={repos}/>
    </>
  );
};

export default SearchFormController(SearchForm);
