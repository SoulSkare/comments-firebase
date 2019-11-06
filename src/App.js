import React, { Component } from 'react';

import Comments from './Comments';
import NewComment from './NewComment';

import { database } from './firebase';

class App extends Component {
  state = {
    comments: ['Comment 1', 'Comment 2', 'Comment 3', 'Comment 4'],
  };

  sendComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  };

  // Metodo de ciclo de vida
  componentDidMount() {}

  render() {
    return (
      <div>
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
