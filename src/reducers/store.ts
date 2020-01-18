import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reposReducer, { IReposReducer } from './reposReducer';
import createSagaMiddleware from 'redux-saga';
import reposSaga from './reposSaga';

export interface IState {
  repos: IReposReducer;
}

const rootReducer = combineReducers({
  repos: reposReducer
});

const w: any = window;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(reposSaga);

export default store;
