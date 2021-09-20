import * as Type from "../constants/ui";

export const showLoading = () => {
  return {
    type: Type.SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: Type.HIDE_LOADING,
  };
};
