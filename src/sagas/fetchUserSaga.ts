import { call, put, takeLatest } from 'redux-saga/effects';
import { IRepo } from '../reducers/repos/initialState';

export type RepoSagaActions =
  | { type: 'LOAD_USER'; username: string }
  | { type: 'LOAD_USER_SUCCESS'; username: string; repos: IRepo[] }
  | { type: 'LOAD_USER_ERROR'; username: string; error: string };

function* fetchUser(action: RepoSagaActions) {
  try {
    const repos = yield call(async username => {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
          method: 'GET'
        }
      );
      if (!res.ok) {
        throw new Error('User not found');
      } else {
        return await res.json();
      }
    }, action.username);
    yield put({ type: 'LOAD_USER_SUCCESS', repos, username: action.username });
  } catch (e) {
    yield put({
      type: 'LOAD_USER_ERROR',
      error: e.message,
      username: action.username
    });
  }
}

function* fetchUserSaga() {
  yield takeLatest('LOAD_USER', fetchUser);
}

export default fetchUserSaga;
