import * as Type from "../constants/task";

export const fetchTaskList = (params = {}) => {
  return {
    type: Type.FETCH_TASK,
    payload: {
      params,
    },
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

export const addTask = (req) => {
  return {
    type: Type.ADD_TASK_REQUEST,
    payload: { req },
  };
};

export const addTaskSuccess = (data_add) => {
  return {
    type: Type.ADD_TASK_SUCCESS,
    payload: { data_add },
  };
};

export const addTaskFailed = (err) => {
  return {
    type: Type.ADD_TASK_FAILED,
    payload: { err },
  };
};
