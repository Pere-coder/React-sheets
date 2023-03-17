import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {

// short circuit operator
    return   this.state.isLoggedIn && <div>Welcome Vishwas</div>

    // conditional ternary operator
    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome Vishwa</div>:
    //     <div>Welcome Guest</div>

    // )

        
// element variables
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Vishwa</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

// if else
    // return <div>{message}</div>
    // if   (this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome Vishwa
    //         </div>
    //     )
    // }else {
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
   
      
      
  }
}

export default UserGreeting