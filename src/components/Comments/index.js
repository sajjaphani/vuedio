import React from "react";
import CommentForm from "../CommentForm";
import Comment from "../Comment";

import "./Comments.css";

const commentContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?";

const Comments = () => (
  <div>
    <div className="CommentsSection">
      <div className="row">
        <div className="CommentsContainer">
          <h1>Comments</h1>
          <CommentForm avatar="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c3.0.40.40/p40x40/32225_400924990958_6369974_n.jpg?oh=8c17cdf604d053e3e77b5487e48b0f89&oe=5A957CE3" />
          <ul className="CommentsList">
            <li>
              <div className="CommentMainLevel">
                <Comment
                  avatar="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.0.60.60/p60x60/19059568_10212456734831929_5171602577296152885_n.jpg?oh=5d442aee9b8abf1d109463a89263872a&oe=5AAD5D2A"
                  content={commentContent}
                  commentTime="some time back"
                  user="Nischal Srinivas"
                />
              </div>
              <ul className="CommentsList ReplyList">
                <li>
                  <Comment
                    avatar="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/p80x80/16114725_10154898805008554_6268391770043341167_n.jpg?oh=04f6b9ad6a97273be6c8d1682c1b5fcc&oe=5AA7145A"
                    content={commentContent}
                    commentTime="some time back"
                    user="Phani Kishore"
                  />
                </li>
                <li>
                  <Comment
                    avatar="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c3.0.40.40/p40x40/32225_400924990958_6369974_n.jpg?oh=8c17cdf604d053e3e77b5487e48b0f89&oe=5A957CE3"
                    content={commentContent}
                    commentTime="some time back"
                    user="Phani Sajja"
                  />
                </li>
              </ul>
            </li>
            <li>
              <div className="CommentMainLevel">
                <Comment
                  avatar="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.6.80.80/p80x80/28106_403911010269_5784695_n.jpg?oh=179f0c1961ed38dee70fd8757bc7ca02&oe=5A91B9F1"
                  content={commentContent}
                  commentTime="some time back"
                  user="Srinivas Addagulla"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Comments;
