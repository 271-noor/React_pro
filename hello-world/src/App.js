// import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './component/Greet'
import  Welcome  from './component/welcome'
import Hello from './component/Hello'
import Message from './component/message'
import { Component } from 'react';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Message />
      </div>
    )
  }
}

// function App (){

//   return (
//     <div className="App">
//       <Greet name="Bruce" heroName="Badman">
//         <p>This is Children Props</p>
//         </Greet>
//       <Greet name="Clark" heroName="Superman">
//         <button>Action</button>
//         </Greet>
//       <Greet name="Diana" heroName="Wonder Woman" />

//       <Welcome name="Bruce" heroName="Badman" />
//       <Welcome name="Clark" heroName="Superman" />
      {/* <Hello /> */}
    // </div>
  // );
  // }

export default App;
 