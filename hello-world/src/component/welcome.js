// this is Class Component code


import React , { Component } from 'react';

class Welcome extends Component{
    // a.k.a = Also known as
    render(){
            return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome