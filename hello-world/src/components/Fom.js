import React, { Component } from 'react'

class Fom extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'react',
      }

      
    }
    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
  }


  handleCommentChange = (event) => {
        this.setState({ comments: event.target.value })
  }

  handleTopicChange = (event) => {
        this.setState({ topic: event.target.value})
  }

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }

  render() {
    const { username, comments, topic } = this.state

    return (
        <form onSubmit={this.handleSubmit}>
        <div className='App'>
          <label>Username</label>
          <input class="mt-10 bg-gray-500 " tyoe='text' value={this.username} onChange={this.handleUsernameChange}></input>
        </div>

        <div>
            <label>Comments</label>
            <textarea class= ' mt-10 bg-gray-500' value={this.comments} onChange={this.handleCommentChange}></textarea>
        </div>

        <div>
            <label>Topic</label>
            <select value={this.topic} onChange={this.handleTopicChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
        </div>

        <button>Submit</button>
      </form>
    )
  }
}

export default Fom