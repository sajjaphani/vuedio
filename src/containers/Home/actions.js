import * as ActionTypes from './constants';

const prefix = 'HOME';

export const SHOW_HELLO = `${prefix}_SHOW_HELLO`;
export const SHOW_HELLO_ASYNC = `${prefix}_SHOW_HELLO_ASYNC`;
export const SHOW_MOVIES_ASYNC = `${prefix}_SHOW_MOVIES_ASYNC`;


export function showVideoPost(url) {
  return {
    type: ActionTypes.SHOW_VIDEO_POST,
    payload: {
      url
    }
  };
}
