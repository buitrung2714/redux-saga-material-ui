import * as Type from "../constants/task";

export const fetchTaskList = () => {
  return {
    type: Type.FETCH_TASK,
  };
};

export const fetchTaskSuccess = (data) => {
  return {
    type: Type.FETCH_TASK_SUCCESS,
    payload: { data },
  };
};

export const fetchTaskListFailed = (err) => {
  return {
    type: Type.FETCH_TASK_FAILED,
    payload: { err },
  };
};

export const filterTaskList = (keywords) => {
  return {
    type: Type.FILTER_TASK,
    payload: { keywords },
  };
};

export const filterTaskListSuccess = (dataFiltered) => {
  return {
    type: Type.FILTER_TASK_SUCCESS,
    payload: { dataFiltered },
  };
};
