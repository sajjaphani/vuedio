import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import VideoGrid from '../../components/VideoGrid';
import Sidebar from '../../components/Sidebar';
import Welcome from '../../components/Welcome';
import './Home.css';

const homeData = require('./home-videos.json');

class HomeContent extends React.Component {
  static propTypes = {
    showVideoPost: PropTypes.func,
  };

  static defaultProps = {
    showVideoPost: undefined,
  }

  state = {
    navExpanded: false
  }

  onNavItemClick = () => {
    this.setState({ navExpanded: false });
  }

  onNavbarToggle = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  }

  render() {
    console.log('Inside Home', this.props);

    return (
      <Grid className="HomeGrid">
        <Row className="show-grid">
          <Welcome />
        </Row>
        <Row className="show-grid">
          <Col md={3} lg={3}>
            <Sidebar  {...this.props}/>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9}>
            <VideoGrid title='Trending' posts={homeData.trending} />
            <VideoGrid title="Recommended" posts={homeData.recommended} />
            <VideoGrid title="Watch It Again" posts={homeData.watchItAgain} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomeContent;
