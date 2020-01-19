import { connect } from 'react-redux';
import { IState } from '../../store';
import { IRepo } from '../../reducers/repos/initialState';

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
