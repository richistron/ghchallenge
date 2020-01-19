import { connect } from 'react-redux';
import { IRepo } from '../../reducers/reposReducer';
import { IState } from '../../store';

export interface IFavoritesStateProps {
  repos: IRepo[];
}

const mapFavorites = (state: IState) => {
  const { favorites, repos } = state.repos;
  const users = Object.keys(repos);
  const favKeys = Object.keys(favorites);
  const allRepos = users.map(key => repos[key]).flat();
  return allRepos.filter(repo => favKeys.find(id => favorites[id] === repo.id));
};

const mapStateProps = (state: IState): IFavoritesStateProps => ({
  repos: mapFavorites(state)
});

export default connect(mapStateProps);
