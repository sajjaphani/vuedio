import React from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom/Link";
import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

import ListItemLink from "../../components/ListItemLink";
import Notification from "../../components/Notification";

import "./MainNav.css";

class MainNav extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object
  };

  static defaultProps = {
    location: undefined,
    children: undefined
  };

  state = {
    navExpanded: false
  };

  onNavItemClick = () => {
    this.setState({ navExpanded: false });
  };

  onNavbarToggle = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  };

  render() {
    const title = (
      <span>
        <img src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/p80x80/16114725_10154898805008554_6268391770043341167_n.jpg?oh=04f6b9ad6a97273be6c8d1682c1b5fcc&oe=5AA7145A" alt="" />
      </span>
    );

    const notification = (
      <span>
        <i className="fa fa-bell-o" aria-hidden="true" style={{lineHeight:"100%"}}></i>
      </span>
    );

    return (
      <Navbar
        inverse
        collapseOnSelect
        staticTop
        expanded={this.state.navExpanded}
        onToggle={this.onNavbarToggle}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" onClick={this.onNavItemClick}>
              <span>DiscoVid</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <ListItemLink to="/about" onClick={this.onNavItemClick}>
              About Us
            </ListItemLink>
            <ListItemLink to="/feed" onClick={this.onNavItemClick}>
              Feed
            </ListItemLink>
          </Nav>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{" "}
            <Button type="submit" bsStyle="primary">
              <i className="fa fa-search" aria-hidden="true" />
            </Button>
          </Navbar.Form>
          <Nav pullRight>
            <ListItemLink to="/posts/new" onClick={this.onNavItemClick}>
              <i className="fa fa-plus fa-sm" aria-hidden="true" style={{lineHeight: "100%"}} />
            </ListItemLink>
            <NavDropdown eventKey={3} title={notification} noCaret id="basic-nav-dropdown" style={{margin:"2px 0 0"}}>
              <Notification />
            </NavDropdown>
            <NavDropdown eventKey={3} title={title} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Profile</MenuItem>
              <MenuItem eventKey={3.2}>Settings</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
