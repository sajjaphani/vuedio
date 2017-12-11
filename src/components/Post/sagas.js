import { put, takeLatest } from 'redux-saga/effects'

import { TOGGLE_COMMENTS, TOGGLE_COMMENTS_SUCCESS } from './constants'

function* toggleCommentsAction(action) {
    yield put({ type: TOGGLE_COMMENTS_SUCCESS, payload: action.payload })
}

function* toggleCommentsSaga() {
    yield takeLatest(TOGGLE_COMMENTS, toggleCommentsAction)
}

export { toggleCommentsSaga }