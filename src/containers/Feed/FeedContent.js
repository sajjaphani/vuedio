import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';

import './Feed.css';

class FeedContent extends React.Component {
  static propTypes = {
    showVideoPost: PropTypes.func,
  };

  static defaultProps = {
    showVideoPost: undefined,
  }

  state = {
    navExpanded: false
  }

  render() {
    return (
      <Grid className="FeedGrid">
        <Row className="show-grid">
          <Col md={3} lg={3}>
            <Sidebar />
          </Col>
          <Col xs={12} sm={12} md={9} lg={9}>
            <Feed match={this.props.match} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FeedContent;
