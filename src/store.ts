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

// const w: any = window;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__(),
    persistState()
  )
);

sagaMiddleware.run(reposSaga);

export default store;
