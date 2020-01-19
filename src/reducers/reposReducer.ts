import { RepoSagaActions } from '../sagas/fetchUserSaga';

export interface IRepo {
  name: string;
  id: number;
  owner: {
    avatar_url: string;
  };
}

export interface IReposReducer {
  repos: { [key: string]: IRepo[] };
  error: null | string;
  isLoading: boolean;
  username: string;
  favorites: { [key: string]: number };
}

export type ReposAction =
  | RepoSagaActions
  | { type: 'SET_USER'; username: string }
  | { type: 'REMOVE_FROM_FAVORITES'; id: number }
  | { type: 'ADD_TO_FAVORITES'; id: number };

const initialState: IReposReducer = {
  username: '',
  repos: {},
  isLoading: false,
  error: null,
  favorites: {}
};

function addRepos(
  repos: { [p: string]: IRepo[] },
  action: { type: 'LOAD_USER_SUCCESS'; username: string; repos: IRepo[] }
) {
  const newState = { ...repos };
  newState[action.username] = action.repos;
  return newState;
}

function addToFavorites(
  favorites: { [p: string]: number },
  action: { type: 'ADD_TO_FAVORITES'; id: number }
) {
  const newState = { ...favorites };
  newState[String(action.id)] = action.id;
  return newState;
}

function removeToFavorites(
  favorites: { [p: string]: number },
  action: { type: 'REMOVE_FROM_FAVORITES'; id: number }
) {
  const newState = { ...favorites };
  delete newState[String(action.id)];
  return newState;
}

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

    default:
      return state;
  }
};

export default reposReducer;
