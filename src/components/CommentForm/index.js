import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl } from "react-bootstrap";

import "./CommentForm.css";

class CommentForm extends React.Component {
  static propTypes = {
    comment: PropTypes.string
  };

  static defaultProps = {
    comment: undefined
  };

  constructor(props) {
    super(props);
    this.state = { comment: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Comment", this.state.comment);
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  render() {
    const { avatar } = this.props;

    return (
      <div className="CommentFormContainer" style={{marginTop: "10px"}}>
        <div className="CommentAvatar">
          <img src={avatar} alt="" />
        </div>
        <div className="CommentForm">
          <form>
            <FormGroup controlId="formCommentText">
              <FormControl
                type="text"
                value={this.state.comment}
                placeholder="Write a Comment..."
                onChange={this.handleChange}
              />
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
