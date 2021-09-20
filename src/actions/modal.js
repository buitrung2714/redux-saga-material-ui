import * as Type from "../constants/modal";

export const showModal = () => {
  return {
    type: Type.SHOW_MODAL,
  };
};

export const hideModal = () => {
  return {
    type: Type.HIDE_MODAL,
  };
};

export const changeModalTitle = (title) => {
  return {
    type: Type.CHANGE_MODAL_TITLE,
    payload: { title },
  };
};

export const changeModalContent = (component) => {
  return {
    type: Type.CHANGE_MODAL_CONTENT,
    payload: { component },
  };
};
