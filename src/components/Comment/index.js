import React from "react";
import { Button } from "react-bootstrap";

import "./Comment.css";

const Comment = ({ avatar, user, commentTime, content }) => (
  <div>
    <div className="CommentAvatar">
      <img src={avatar} alt="" />
    </div>
    <div className="CommentBox">
      <div className="CommentHeader">
        <span className="CommentUser">
          <a href="/nn">{user}</a> 
        </span>
        <span>{content}</span>
      </div>
      <div className="CommentFooter">
        {" "}
        <span>
          <Button bsStyle="link">Like</Button> {" "}
        </span>
        <span>
          <Button bsStyle="link">Comment</Button>
          {"  "}
        </span>
        <span>
          <i className="fa fa-thumbs-o-up" aria-hidden="true" /> 3 . 1hr
        </span>
      </div>
    </div>
  </div>
);

export default Comment;
