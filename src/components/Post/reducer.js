import * as Types from './constants'
import { fromJS } from 'immutable'

const initialState = {
}

const postsReducer = (state = fromJS(initialState), action) => {
    switch (action.type) {
        case Types.TOGGLE_COMMENTS_SUCCESS:
            {
                console.log('herere', action.payload)
                const { id } = action.payload
                const expandComments = state.getIn([id, "expandComments"]) || false;
                console.log('expandComments bla', expandComments)
                return state.setIn([id, 'expandComments'], !expandComments)
            }
        default:
            return state
    }
}

export default postsReducer;