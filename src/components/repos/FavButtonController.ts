import { connect } from 'react-redux';
import { IState } from '../../store';
import { Dispatch } from 'redux';
import { IRepo, ReposAction } from '../../reducers/repos/initialState';

export interface FavButtonOwnProps {
  repo: IRepo;
}

export interface FavButtonDispatchProps {
  addFav: (id: number) => void;
  removeFav: (id: number) => void;
}
export interface FavButtonStateProps {
  fav: boolean;
}

function isFaved(state: IState, id: number) {
  return Boolean(state.repos.favorites[String(id)]) || false;
}

const mapStateToProps = (
  state: IState,
  { repo }: FavButtonOwnProps
): FavButtonStateProps => ({
  fav: isFaved(state, repo.id)
});

const mapDispatchToProps = (
  dispatch: Dispatch<ReposAction>
): FavButtonDispatchProps => ({
  addFav: (id: number) => {
    dispatch({ type: 'ADD_TO_FAVORITES', id });
  },
  removeFav: (id: number) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', id });
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
