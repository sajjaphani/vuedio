import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { SHOW_VIDEO_POST, SHOW_VIDEO_POST_SUCCESS } from './constants';

function* showVideoPostSagaAction(action) {
  // console.log(action);
  yield put({ type: SHOW_VIDEO_POST_SUCCESS, payload: true });
  yield put(push(action.payload.url));
}

export default function* showVideoPostSaga() {
  yield takeLatest(SHOW_VIDEO_POST, showVideoPostSagaAction);
}

// export default { showVideoPostSaga };
