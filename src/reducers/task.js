import * as Type from "../constants/task";
import { toastError } from "../helpers/toastHelper";

const initialState = {
  listTask: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case Type.FETCH_TASK_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    case Type.FETCH_TASK_FAILED:
      const { err } = action.payload;
      toastError(err);
      return {
        ...state,
        listTask: [],
      };
    default:
      return state;
  }
};

export default reducer;
