import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as actions from "./actions";
import app from '../../config';

import HomeContent from "./HomeContent";

class Home extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    location: PropTypes.object,
    children: PropTypes.object
    // modal: PropTypes.bool
  };

  static defaultProps = {
    homeinfo: undefined,
    actions: undefined,
    location: undefined,
    children: undefined,
    modal: false
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      location: this.props.location,
      previousChildren: this.props.children
    });
  }

  render() {
    console.log('Home', this.props);
    return (
      <div>
        <Helmet title={app.title} />
        <HomeContent showVideoPost={this.props.actions.showVideoPost} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
