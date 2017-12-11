import React from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";

const ListItemLink = ({ to, children, onClick }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li role="presentation" className={match ? "active" : ""}>
        <Link to={to} onClick={onClick}>
          {children}
        </Link>
      </li>
    )}
  />
);

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

ListItemLink.defaultProps = {
  onClick: undefined
};

export default ListItemLink;
