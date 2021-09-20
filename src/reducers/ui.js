import * as Type from "../constants/ui";

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.SHOW_LOADING:
      return {
        isLoading: true,
      };
    case Type.HIDE_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
