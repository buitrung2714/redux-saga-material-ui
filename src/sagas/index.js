import {
  fork,
  call,
  take,
  put,
  delay,
  select,
  takeLatest,
} from "redux-saga/effects";
import * as Type from "../constants/task";
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants";
import {
  fetchTaskSuccess,
  fetchTaskListFailed,
  filterTaskListSuccess,
} from "../actions/task";
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

function* filterTask(action) {
  yield delay(500);
  const {
    payload: { keywords },
  } = action;
  const stateCurrent = yield select((state) => state.tasks.listTask);
  const taskFiltered = stateCurrent.filter((task) =>
    task.title.trim().toLowerCase().includes(keywords.trim().toLowerCase())
  );
  yield put(filterTaskListSuccess(taskFiltered));
}

function* rootSaga() {
  yield fork(fetchTaskList);
  yield takeLatest(Type.FILTER_TASK, filterTask);
}

export default rootSaga;
