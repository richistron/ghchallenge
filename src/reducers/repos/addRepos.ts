import { IRepo } from './initialState';

export default function addRepos(
  repos: { [p: string]: IRepo[] },
  action: { type: 'LOAD_USER_SUCCESS'; username: string; repos: IRepo[] }
) {
  const newState = { ...repos };
  newState[action.username] = action.repos;
  return newState;
}
