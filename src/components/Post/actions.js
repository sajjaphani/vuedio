import * as ActionTypes from "./constants";

const toggleComments = id => {
  return {
    type: ActionTypes.TOGGLE_COMMENTS,
    payload: { id: id, toggle: true }
  };
};

export { toggleComments };
