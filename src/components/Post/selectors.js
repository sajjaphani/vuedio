import { createSelector } from "reselect";

const getPostId = (state, ownProps) => {
  console.log("id", ownProps.post.id);
  return ownProps.post.id;
};

const getPosts = state => state.posts;

const getPost = createSelector([getPostId, getPosts], (id, posts) => {
  console.log(id);
  return posts.get(id);
});

const isExpandComments = createSelector(getPost, post => {
  console.log("How are you!");
  return post && post.get("expandComments");
});

export { isExpandComments };
