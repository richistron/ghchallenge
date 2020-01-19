import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ReposAction } from '../../reducers/reposReducer';
import { IState } from '../../store';

export interface ISearchFormStateProps {
  isLoading: boolean;
  error: string;
  username: string;
}
export interface ISearchFormProps {
  loadUser: (username: string) => void;
  setUser: (username: string) => void;
}

const mapStateToProps = (state: IState): ISearchFormStateProps => ({
  isLoading: state.repos.isLoading,
  error: state.repos.error || '',
  username: state.repos.username
});

const mapDispatchToProps = (
  dispatch: Dispatch<ReposAction>
): ISearchFormProps => ({
  setUser: (username: string) => {
    dispatch({ type: 'SET_USER', username });
  },
  loadUser: (username: string) => {
    dispatch({ type: 'LOAD_USER', username });
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
