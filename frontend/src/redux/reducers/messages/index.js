import { SET_MESSAGE } from "./actions";

const initialState = {
  message: {},
};

export const message = (state = initialState, { type, payload }) => {
  switch (type) {
    /* case value:
      return; */
    case SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};
