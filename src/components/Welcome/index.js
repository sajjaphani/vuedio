import React from "react";
import { Col, Button, Jumbotron } from "react-bootstrap";

const Welcome = () => (
  <Col lg={12}>
    <Jumbotron>
      <h1>Discover Videos</h1>
      <p>
        Video Hunt surfaces the best new videos, every day. It's a place for
        video-loving enthusiasts to share and watch latest awesome videos. So
        join our awesome community to discover awesome videos everyday.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </Col>
);

export default Welcome;
