import { call, put, takeLatest } from 'redux-saga/effects';
import { ReposAction } from './reposReducer';

function* fetchUser(action: ReposAction) {
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

function* reposSaga() {
  yield takeLatest('LOAD_USER', fetchUser);
}

export default reposSaga;
