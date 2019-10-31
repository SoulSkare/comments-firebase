import React, { Component } from 'react';

// import { Container } from './styles';

class App extends Component {
  state = {
    comments: [
      ' Comment 1',
      ' Comment 2',
      ' Comment 3',
      'Comment 4'
    ]
  }

  sendComment = () => {
    this.setState({
      comments: [
        ...this.state.comments, 'Comentário Novo'
      ]
    })
  }
  render() {
    return (
      <div>
        { /* New comment */}
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button onClick={this.sendComment}>Enviar</button>
        </div>
        { /* Comments */}
        <div>
        { /* Comment */}
        { this.state.comments.map(c => {
          return <div>{c}</div>
        })}
       </div>

      </div>
    
      );
  }
}

export default App;