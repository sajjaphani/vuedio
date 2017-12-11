import React from 'react';
import { PropTypes } from 'prop-types';

import Helmet from 'react-helmet';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

import app from '../../config';

class NewPost extends React.Component {

  static get propTypes() {
    return {
      id: PropTypes.any,
    };
  }

  static defaultProps = {
    id: undefined,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ isLoading: true });
    e.preventDefault();
  }

  render() {
    const pageTitle = `New Post - ${app.title}`;
    return (
      <div className="container">
        <Helmet title={pageTitle} />
        <h1>Post Something New</h1>
        <form>
          <FormGroup
            controlId="formUrl"
          >
            <ControlLabel>URL</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Provide a Vide URL from Youtube, Facebook, Vimeo, etc.</HelpBlock>
          </FormGroup>

          <Button
            type="submit"
            bsStyle="primary"
            onClick={this.handleClick}
          >
            Next
        </Button>
        </form>
      </div>
    );
  }
}

export default NewPost;
