import React from 'react';
import { connect } from 'react-redux';
//import {actionRequest} from '../actions/landingPage';


class LandingPage extends React.Component{
  componentDidMount(){
    console.log('testing wires');
  }
  
  render(){
  console.log('testing wires of render');

  return (
    <div>
    <div>Hello World</div>
    <div>{this.props.amount}</div>
    </div>
  );
  }
}

const mapStateToProps = state => ({
  amount: state.amount,
  balance: state.balance,
  public_key: state.public_key,
});

export default connect(mapStateToProps)(LandingPage);