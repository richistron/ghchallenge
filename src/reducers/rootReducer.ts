import reposReducer from './repos/reposReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  repos: reposReducer
});

export default rootReducer;
