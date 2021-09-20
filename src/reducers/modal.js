import * as Type from "../constants/modal";

const initialState = {
  showModal: false,
  title: "",
  component: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case Type.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case Type.CHANGE_MODAL_TITLE:
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    case Type.HIDE_MODAL:
      const { component } = action.payload;
      return {
        ...state,
        component,
      };
    default:
      return state;
  }
};

export default reducer;
