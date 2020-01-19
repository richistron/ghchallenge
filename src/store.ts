import { applyMiddleware, createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import createSagaMiddleware from 'redux-saga';
import reposSaga from './sagas/fetchUserSaga';
import { IReposReducer } from './reducers/repos/initialState';
import rootReducer from './reducers/rootReducer';

export interface IState {
  repos: IReposReducer;
}

const w: any = window;
const isProd = process.env.NODE_ENV === 'production';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  !isProd && w.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(sagaMiddleware),
        persistState(),
        w.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : compose(applyMiddleware(sagaMiddleware), persistState())
);

sagaMiddleware.run(reposSaga);

export default store;
