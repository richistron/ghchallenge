import initialState, { IReposReducer, ReposAction } from './initialState';
import addRepos from './addRepos';
import addToFavorites from './addToFavorites';
import removeToFavorites from './removeToFavorites';

const reposReducer = (
  state?: IReposReducer,
  action?: ReposAction
): IReposReducer => {
  if (!state) {
    return { ...initialState };
  }
  if (!action) {
    return state;
  }

  switch (action.type) {
    case 'LOAD_USER':
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case 'LOAD_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case 'LOAD_USER_SUCCESS':
      return {
        ...state,
        repos: addRepos(state.repos, action),
        isLoading: false,
        error: null
      };

    case 'SET_USER':
      return {
        ...state,
        username: action.username
      };

    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: addToFavorites(state.favorites, action)
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: removeToFavorites(state.favorites, action)
      };

    case 'FILTER_FAVORITES':
      return {
        ...state,
        favFilter: action.favFilter
      };

    default:
      return state;
  }
};

export default reposReducer;
