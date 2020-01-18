import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
  foo: () => ({})
});

const w:any = window;

export default createStore(rootReducer,  w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__());