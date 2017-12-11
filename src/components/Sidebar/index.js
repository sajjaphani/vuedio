import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import "./Sidebar.css";

const feeds = [
  {
    link: "/feed/funny",
    title: "Funny"
  },
  {
    link: "/feed/prank",
    title: "Prank"
  },
  {
    link: "/feed/social-experiment",
    title: "Social Experiment"
  },
  {
    link: "/feed/short-films",
    title: "Short Films"
  },
  {
    link: "/feed/trailers",
    title: "Trailers"
  },
  {
    link: "/feed/science",
    title: "Science"
  },
  {
    link: "/feed/technology",
    title: "Technology"
  },
  {
    link: "/feed/education",
    title: "Education"
  },
  {
    link: "/feed/inspirational",
    title: "Inspirational"
  }
];

const NavLink = ({ exact, to, eventKey, children }) => (
  <LinkContainer exact={exact} to={to} eventKey={eventKey}>
    <NavItem>{children}</NavItem>
  </LinkContainer>
);

const Sidebar = ({ match }) => {
  console.log("Sidebar", match);
  return (
    <div>
      <div className="FeedCustomize">
        <span>FEEDS</span>
        <span>
          <Link to="/yours/customize" style={{ textDecoration: "none" }}>
            <span>
              Customize
            </span>
          </Link>
        </span>
      </div>
      <Nav bsStyle="pills" stacked activeKey={1}>
        <NavLink exact to="/feed" eventKey={1}>
          All
        </NavLink>
        {feeds.map((feed, i) => (
          <NavLink eventKey={feed.link} to={feed.link} key={feed.link}>
            {feed.title}
          </NavLink>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
