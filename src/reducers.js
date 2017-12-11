import { combineReducers } from "redux";
import appReducer from "./containers/App/reducer";
import postsReducer from "./components/Post/reducer";

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer
});

export default rootReducer;
