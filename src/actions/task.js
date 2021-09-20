import * as taskApis from "../apis/task";
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

// export const fetchTaskListRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchTaskList());
//     taskApis
//       .getList()
//       .then((data) => dispatch(fetchTaskSuccess(data)))
//       .catch((err) => dispatch(fetchTaskListFailed(err)));
//   };
// };
