import * as Type from "../constants/task";

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
    default:
      return state;
  }
};

export default reducer;
