import { RepoSagaActions } from '../../sagas/fetchUserSaga';

export interface IRepo {
  name: string;
  id: number;
  full_name: string;
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
  favFilter: string;
}

export type ReposAction =
  | RepoSagaActions
  | { type: 'SET_USER'; username: string }
  | { type: 'REMOVE_FROM_FAVORITES'; id: number }
  | { type: 'FILTER_FAVORITES'; favFilter: string }
  | { type: 'ADD_TO_FAVORITES'; id: number };

const initialState: IReposReducer = {
  username: '',
  repos: {},
  isLoading: false,
  error: null,
  favorites: {},
  favFilter: ''
};

export default initialState;
