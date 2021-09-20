import { fork, call, take, put, delay } from "redux-saga/effects";
import * as Type from "../constants/task";
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants";
import { fetchTaskSuccess, fetchTaskListFailed } from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";

function* fetchTaskList() {
  yield take(Type.FETCH_TASK);
  yield put(showLoading());
  const res = yield call(getList);
  yield delay(1000);
  if (res.status === STATUS_CODE.SUCCESS) {
    yield put(fetchTaskSuccess(res.data));
  } else {
    yield put(fetchTaskListFailed(res));
  }
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(fetchTaskList);
}

export default rootSaga;
