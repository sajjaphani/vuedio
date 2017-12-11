import React from "react";
import PropTypes from "prop-types";
import { Panel, ResponsiveEmbed } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PostSummary from "../PostSummary";

import Comments from "../Comments";

import * as actions from "./actions";

import { isExpandComments } from "./selectors";

import "./Post.css";

class Post extends React.Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = { post: this.props.post, showEmbed: false };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    // Don't load both, load only that is required
    // Use an id to load rather than full load
    // IF twttr and current widget is twttr
    const twttr = window.twttr;
    if (twttr && twttr.widgets) {
      // console.log("Twitter loaded");
      twttr.widgets.load();
    }
    const { id } = this.state.post;
    const FB = window.FB;
    // IF FB and current widget is FB
    if (FB && FB.XFBML) {
      // console.log("FB loaded");
      FB.XFBML.parse(document.getElementById(id));
    }
  }

  handleClick() {
    this.setState({ showEmbed: true });
  }

  render() {
    const { expandComments } = this.props;
    const { showEmbed } = this.state;
    const { id, title, thumbnail_url: image, html: embed } = this.state.post;

    const imageEmbed = (
      <div className="VideoThumbnail" onClick={this.handleClick}>
        <ResponsiveEmbed a16by9>
          <embed src={image} />
        </ResponsiveEmbed>
      </div>
    );

    const videoEmbed = (
      <div
        id={id}
        style={{ width: "100%", height: "100%", minHeight: "500px" }}
      >
        <ResponsiveEmbed a16by9 bsClass="EmbedStyle">
          <div dangerouslySetInnerHTML={{ __html: embed }} />
        </ResponsiveEmbed>
      </div>
    );
    const contentEmbed = showEmbed ? videoEmbed : imageEmbed;
    const footer = expandComments ? <Comments /> : <div />;
    return (
      <Panel header={title} footer={footer}>
        {contentEmbed}
        <PostSummary
          canShrinkComments
          toggleComments={this.props.actions.toggleComments}
          id={id}
        />
      </Panel>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    expandComments: isExpandComments(state, ownProps)
  };
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
