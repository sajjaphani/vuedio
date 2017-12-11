import React from "react";
import { Panel, PanelGroup } from "react-bootstrap";
import Post from "../Post";

const feeds = require("./feeds.json");

const Feed = ({ match }) => {
  const feedName = match.params.feedId || "all";
  const feed = feeds[feedName];
  const feedObj = feed ? feed.data.feed : [];
  const postsObj = feed ? feed.data.posts : [];

  if (!feed)
    return (
      <Panel header="Not Found" bsStyle="info">
        <h4>Not Found </h4>
      </Panel>
    );

  return (
    <div>
      {Object.keys(feedObj).map(key => {
        console.log(feedObj[key]);
        return (
          <Panel header={key} bsStyle="info" key={key}>
            <PanelGroup>
              {feedObj[key].map(postId => (
                <Post post={postsObj[postId]} key={postId} />
              ))}
            </PanelGroup>
          </Panel>
        );
      })}
    </div>
  );
};

export default Feed;
