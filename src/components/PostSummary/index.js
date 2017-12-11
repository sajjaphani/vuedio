import React from "react";
import { Button } from "react-bootstrap";

import "./PostSummary.css";

class PostSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canShrinkComments: this.props.canShrinkComments,
      liked: false
    };
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleCommentClick = this.handleCommentClick.bind(this);
  }

  handleLikeClick(e) {
    e.preventDefault();
    this.setState({ liked: !this.state.liked });
    console.log("Toggle Like");
  }

  handleCommentClick(e) {
    console.log("Toggle Comment", this.state.canShrinkComments);
    e.preventDefault();
    if(this.state.canShrinkComments)
      this.props.toggleComments(this.props.id);
  }

  render() {
    const { liked } = this.state;
    console.log(liked)
    console.log('props', this.props)
    const color = liked ? "LikedStyle" : "LikeStyle";

    return (
      <div>
        <div className="FeedSummary">
          <span>
            {" "}
            <i
              className="fa fa-thumbs-o-up text-info fa-lg"
              aria-hidden="true"
            />{" "}
            8.3K
          </span>
          <span> 495 Comments 1.4K Shares 349K Views</span>
        </div>
        <div className="Separator">
          <hr />
        </div>
        <div className="LikeShare">
          <div>
            <span className={color}>
              <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true" />
              <Button bsStyle="link" onClick={this.handleLikeClick}>
                Like
              </Button>
            </span>
            <span>
              <i className="fa fa-comment-o fa-lg" aria-hidden="true" />
              <Button bsStyle="link" onClick={this.handleCommentClick}>
                Comment
              </Button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PostSummary;
