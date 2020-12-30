import { put, takeEvery, all } from 'redux-saga/effects';

import { getHotels } from "./api";
import { FETCH_HOTELS_SUCCESS, FETCH_HOTELS_LOADING } from "./reducers/hotels";

function* fetchHotels(action) {
    yield put({ type: FETCH_HOTELS_LOADING });
    const hotels = yield getHotels(action.params);
    yield put({ type: FETCH_HOTELS_SUCCESS, payload: hotels });
}

function* watchFetchHotels() {
    yield takeEvery("FETCH_HOTELS", fetchHotels);
}

function* rootSaga() {
    yield all([watchFetchHotels()]);
}

export default rootSaga;