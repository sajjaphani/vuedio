import { fromJS } from 'immutable';

const initialState = {
};

const appReducer = (state = fromJS(initialState), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;