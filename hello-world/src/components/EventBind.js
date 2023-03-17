import React, { Component } from 'react'

class EventBind extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         mesage: 'Hello'
      }
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            mesage: 'Goodbye!'
        })
        console.log(this)

        
    }


  render() {
    return (
      <div>
        <div>{this.state.mesage}</div>
        {/* <div><button onClick={this.clickHandler.bind(this)}>Click</button></div> */}
        {/* <div><button onClick={() => this.clickHandler()}>Click</button></div> */}
        <div><button onClick={this.clickHandler}>Click</button></div>
        </div>
    )
  }
}

export default EventBind