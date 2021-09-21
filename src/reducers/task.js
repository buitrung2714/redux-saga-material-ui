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
    case Type.FILTER_TASK_SUCCESS:
      const { dataFiltered } = action.payload;
      return {
        ...state,
        listTask: dataFiltered,
      };
    case Type.ADD_TASK_REQUEST:
      return {
        ...state,
      };
    case Type.ADD_TASK_SUCCESS:
      const { data_add } = action.payload;
      return {
        ...state,
        listTask: [data_add].concat(state.listTask),
      };
    case Type.ADD_TASK_FAILED:
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
