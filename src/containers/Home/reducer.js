import { fromJS } from 'immutable';
import * as Types from './constants';

const initialState = {
};

const homeReducer = (state = fromJS(initialState), action) => {
  switch (action.type) {
    case Types.SHOW_VIDEO_POST_SUCCESS: {
      const { payload } = action;
      // console.log(payload);
      return state.set('modal', payload);
    }
    default:
      return state;
  }
};

export default homeReducer;
