import {
  fork,
  call,
  take,
  put,
  delay,
  select,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import * as Type from "../constants/task";
import { getList, addTask } from "../apis/task";
import { STATUS_CODE, STATUS_LIST } from "../constants";
import {
  fetchTaskSuccess,
  fetchTaskListFailed,
  fetchTaskList,
  addTaskSuccess,
  addTaskFailed,
} from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";
import { hideModal } from "../actions/modal";

function* fetchTaskListSaga() {
  while (true) {
    const action = yield take(Type.FETCH_TASK);
    yield put(showLoading());
    const { params } = action.payload;
    const res = yield call(getList, params);
    if (res.status === STATUS_CODE.SUCCESS) {
      yield put(fetchTaskSuccess(res.data));
    } else {
      yield put(fetchTaskListFailed(res));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterTask(action) {
  yield delay(500);
  const { keywords } = action.payload;
  yield put(
    fetchTaskList({
      q: keywords,
    })
  );
}

function* addTaskRequest(action) {
  yield put(showLoading());
  const {
    req: { title, description },
  } = action.payload;
  const res = yield call(addTask, {
    title,
    description,
    status: STATUS_LIST[0].value,
  });
  if (res.status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(res.data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(res.data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(fetchTaskListSaga);
  yield takeLatest(Type.FILTER_TASK, filterTask);
  yield takeEvery(Type.ADD_TASK_REQUEST, addTaskRequest);
}

export default rootSaga;
