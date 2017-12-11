import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
// import { bindActionCreators } from 'redux';

import app from "../../config";

import FeedContent from "./FeedContent";

class Feed extends React.Component {
  static propTypes = {
    // actions: PropTypes.object,
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
    const pageTitle = `Feed - ${app.title}`;
    return (
      <div>
        <Helmet title={pageTitle} />
        <FeedContent match={this.props.match} />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actions, dispatch) };
// }

export default connect(mapStateToProps)(Feed);
