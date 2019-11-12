import React, { Component } from 'react';

import Comments from './Comments';
import NewComment from './NewComment';

import { database } from './firebase';

class App extends Component {
  state = {
    comments: {},
    isLoading: false,
  };

  sendComment = comment => {
    const id = database
      .ref()
      .child('comments')
      .push().key;

    const comments = {};

    comments[`comments/${id}`] = {
      comment,
    };

    database.ref().update(comments);
  };

  // Metodo de ciclo de vida
  componentDidMount() {
    this.setState({ isLoading: true });

    // Referenciando o commments dentor do firebase
    this.comments = database.ref('comments');

    // Snapshot com o value de comments
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <div>
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
        {this.state.isLoading && <p>carregando...</p>}
      </div>
    );
  }
}

export default App;
