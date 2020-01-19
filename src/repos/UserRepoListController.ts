import { connect } from 'react-redux';
import { IRepo } from '../reducers/reposReducer';
import { IState } from '../reducers/store';

export interface IUserRepoListOwnProps {
  username: string;
}
export interface IUserRepoListStateProps {
  repos: IRepo[];
}

function getUserRepos(state: IState, username: string) {
  return state.repos.repos[username] || [];
}

const mapStateToProps = (
  state: IState,
  { username }: IUserRepoListOwnProps
): IUserRepoListStateProps => ({
  repos: getUserRepos(state, username)
});

export default connect(mapStateToProps);
