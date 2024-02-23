// Binding Evet Handler..

import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Good Bye!'
    //     })
    //     console.log(this)
    // }
    
    clickHandler = () =>{
        this.setState({
            message: 'GoodBye!'
        })
    }

  render() {
    return (
      <div>
            <div>{this.state.message}</div>
            {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}

            {/* arrow function approach binding in the class constructor */}
            {/* <button onClick = {() => this.clickHandler()}>Click</button> */}

            {/* third aproach binding in the class constructor */}
            <button onClick = {this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
