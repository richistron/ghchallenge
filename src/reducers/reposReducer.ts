export interface IRepo {
  name: string;
  id: number;
  owner: {
    avatar_url: string;
    // TODO, uncomment if needed
    // login: string,
    // id: number,
    // node_id: string,
    // gravatar_id: string,
    // url: string,
    // html_url: string,
    // followers_url: string,
    // following_url: string,
    // gists_url: string,
    // starred_url: string,
    // subscriptions_url: string,
    // organizations_url: string,
    // repos_url: string,
    // events_url: string,
    // received_events_url: string,
    // type: string,
    // site_admin: boolean,
  };
}

export interface IReposReducer {
  repos: { [key: string]: IRepo[] };
  error: null | string;
  isLoading: boolean;
}

export type ReposAction =
  | { type: 'LOAD_USER'; username: string }
  | { type: 'LOAD_USER_SUCCESS'; username: string; repos: IRepo[] }
  | { type: 'LOAD_USER_ERROR'; username: string; error: string };

export type resetSearchAction = { type: 'RESET_SEARCH' };
const initialState: IReposReducer = {
  repos: {},
  isLoading: false,
  error: null
};

function addRepos(
  repos: { [p: string]: IRepo[] },
  action: { type: 'LOAD_USER_SUCCESS'; username: string; repos: IRepo[] }
) {
  const newState = { ...repos };
  newState[action.username] = action.repos;
  return newState;
}

const reposReducer = (
  state?: IReposReducer,
  action?: ReposAction | resetSearchAction
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

    case 'RESET_SEARCH':
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default reposReducer;
