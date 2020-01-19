import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import createSagaMiddleware from 'redux-saga';
import reposSaga from './sagas/fetchUserSaga';
import { IReposReducer } from './reducers/repos/initialState';
import reposReducer from './reducers/repos/reposReducer';

export interface IState {
  repos: IReposReducer;
}

const rootReducer = combineReducers({
  repos: reposReducer
});

const w: any = window;
const isProd = process.env.NODE_ENV === 'production';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    persistState(),
    isProd ? undefined : w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(reposSaga);

export default store;
