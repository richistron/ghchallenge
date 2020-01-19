import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import reposReducer, { IReposReducer } from './reducers/reposReducer';
import createSagaMiddleware from 'redux-saga';
import reposSaga from './sagas/fetchUserSaga';

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
    w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__(),
    persistState()
  )
);

sagaMiddleware.run(reposSaga);

export default store;
