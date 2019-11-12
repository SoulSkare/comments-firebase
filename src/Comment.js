import React, { Component } from 'react';

// import { Container } from './styles';

class Comment extends Component {
  render() {
    return <div>{this.props.c.comment}</div>;
  }
}

export default Comment;
