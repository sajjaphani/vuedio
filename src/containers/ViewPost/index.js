import React from "react";
import Helmet from "react-helmet";
import {
  ResponsiveEmbed,
  Grid,
  Row,
  Col,
  Button,
  Panel
} from "react-bootstrap";

import app from "../../config";
import VideoGridItem from "../../components/VideoGridItem";
import Comments from '../../components/Comments';
import PostSummary from '../../components/PostSummary';

import "./ViewPost.css";

const postsData = require("./sample-videos.json");
const relatedData = require("./related-videos.json");

function renderHeader(title) {
  return <Button bsStyle="link"> {title} </Button>;
}

function renderFooter() {
  return <Comments />;
}

const ViewPost = ({ match, location }) => {
  const post = postsData[match.params.id];
  console.log("post", post);
  console.log("related", relatedData);
  const pageTitle = `Awesome Post - ${app.title}`;
  const isModal = !!(location.state && location.state.modal);
  // this.previousLocation !== location // not initial render
  return (
    <div style={{ marginTop: "20px" }}>
      <Helmet title={pageTitle} />
      <Grid>
        <Row>
          <Col md={9} lg={9}>
            <Panel header={renderHeader(post.title)} footer={renderFooter()}>
              <div style={{ width: "auto", height: "auto" }}>
                <ResponsiveEmbed a16by9>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </ResponsiveEmbed>
              </div>
              <PostSummary />
            </Panel>
          </Col>
          <Col md={3} lg={3}>
            <div className="RelatedVideosLabel">Related Videos</div>
            {relatedData.relatedVideos.map(post => (
              <Row key={post.id}>
                <Col>
                  <VideoGridItem
                    returnTo={"/"}
                    post={post}
                    isModal={isModal}
                  />
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default ViewPost;
