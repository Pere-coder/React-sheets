import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('Class clicked the button')
    }
  render() {
    return (
      <div><button onClick={this.clickHandler}>Class Click me</button></div>
    )
  }
}
export default ClassClick 