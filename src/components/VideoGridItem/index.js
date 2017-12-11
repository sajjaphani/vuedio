import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./VideoGridItem.css";

const VideoGridItem = ({ returnTo, post, isModal }) => (
    <Link
      key={0}
      to={{
        pathname: `/posts/${post.id}`,
        state: {
          modal: isModal,
          returnTo: returnTo
        }
      }}
      style={{ textDecoration: "none", outline: "none", color: "#333" }}
    >
      <ResponsiveEmbed a16by9>
        <embed src={post.thumbnail_url} />
      </ResponsiveEmbed>
      <div className="PostGridItem">
        <h4 className="GridItemTitle">
          {post.title}
        </h4>
        <p className="GridItemChannel">
          <i className="fa fa-youtube fa-lg" aria-hidden="true" /> {post.author} <i className="fa fa-check-circle-o fa-lg" aria-hidden="true"></i>
        </p>
        <p className="GridItemSummary"> 26K views . 11 months ago</p>
      </div>
    </Link>
);

export default VideoGridItem;
