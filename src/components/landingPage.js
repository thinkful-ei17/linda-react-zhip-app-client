import React from 'react';


export default class LandingPage extends React.Component{
  componentDidMount(){
    console.log('testing wires for LandingPage');
  }
  
  render(){
  console.log('testing wires of render for LandingPage');

    return (
      <div>
      <div>Hello World, You have Landed!</div>
      </div>
    );
  }
}