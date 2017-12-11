import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import VideoGridItem from "../VideoGridItem";

import "./VideoGrid.css";

class VideoGrid extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    showVideoPost: PropTypes.func,
    location: PropTypes.object
  };

  static defaultProps = {
    title: undefined,
    showVideoPost: undefined,
    location: undefined
  };

  handleClick = () => {
    // e.preventDefault();
    console.log("I am here");
    this.props.showVideoPost("/pictures/0");
  };

  render() {
    const { title, posts } = this.props;
    console.log("posts", posts);

    return (
      <div className="VideoGrid">
        <div className="GridLabel">{title}</div>
        <Row>
          {posts.map(post => (
            <Col xs={6} md={3} lg={3} key={post.id}>
              <VideoGridItem
                returnTo={this.props.location.pathname}
                post={post}
                isModal={true}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default withRouter(VideoGrid);
