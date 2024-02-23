
// these are four aproaches  Conditional Rendering in React
import React, { Component } from 'react'

 class UserGreeting extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: false
  }
}


  render() {

            // we have the short circuit Operator....
            return this.state.isLoggedIn && <div>Welcome Rozy</div>

            // we have conditiona ternary Operator....
            // return(
            //     this.state.isLoggedIn ?
            //     <div>Welcome Rozy</div>:
            //     <div>Welcome Guest</div>
            // )

            // we have Element variables..... 
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Rozy</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // And we have  ifelse{} ...
        // if (this.state.isLoggedIn) {
        //     return(
        //         <div>Welcome Rozy</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        
        //     )
        // }

    // return (
    //   <div>
    //     <div>Welcome Rozy</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
