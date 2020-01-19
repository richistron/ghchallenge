import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRepo, ReposAction, resetSearchAction } from '../reducers/reposReducer';
import { IState } from '../reducers/store';

export interface ISearchFormStateProps {
  isLoading: boolean;
  error: string;
  repos: IRepo[];
}
export interface ISearchFormProps {
  loadUser: (username: string) => void;
  clearSearch: () => void;
}

const mapStateToProps = (state: IState): ISearchFormStateProps => ({
  isLoading: state.repos.isLoading,
  error: state.repos.error || '',
  repos: state.repos.repos
});

const mapDispatchToProps = (
  dispatch: Dispatch<ReposAction | resetSearchAction>
): ISearchFormProps => ({
  loadUser: (username: string) => {
    dispatch({ type: 'LOAD_USER', username });
  },
  clearSearch: () => {
    dispatch({ type: 'RESET_SEARCH' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
