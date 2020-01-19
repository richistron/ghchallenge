import { connect } from 'react-redux';
import { IRepo, ReposAction } from '../../reducers/reposReducer';
import { IState } from '../../store';
import { Dispatch } from 'redux';

export interface IFavoritesStateProps {
  repos: IRepo[];
  favFilter: string;
}
export interface IFavoritesDispatchProps {
  setFilter: (favFilter: string) => void;
}

const mapFavorites = (state: IState) => {
  const { favorites, repos, favFilter } = state.repos;
  const users = Object.keys(repos);
  const favKeys = Object.keys(favorites);
  const allRepos = users.map(key => repos[key]).flat();
  return allRepos
    .filter(repo => favKeys.find(id => favorites[id] === repo.id))
    .filter(r => r.name.match(favFilter) || r.full_name.match(favFilter));
};

const mapStateProps = (state: IState): IFavoritesStateProps => ({
  repos: mapFavorites(state),
  favFilter: state.repos.favFilter
});

const mapDispatchToProps = (
  dispatch: Dispatch<ReposAction>
): IFavoritesDispatchProps => ({
  setFilter: (favFilter: string) => {
    dispatch({ type: 'FILTER_FAVORITES', favFilter });
  }
});

export default connect(mapStateProps, mapDispatchToProps);
