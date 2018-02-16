import React from 'react';
import {createNewUser} from '../actions/actions';
import {reduxForm} from 'redux-form';
import {withRouter} from "react-router-dom";

export class LandingPage extends React.Component{
  componentDidMount(){
    console.log('testing wires for LandingPage');
  }

  onSubmit() {
    this.props.dispatch(createNewUser()).then(results => {
      if(results){
        this.props.history.push('/r')
      }
      return results 
    })
  }
  
  render(){
    return (
      <div>
      <div>Hello World, You have Landed!</div>
        <form onSubmit={this.props.handleSubmit(() => this.onSubmit())}>
          <p>Click to Get New User Account</p>
           <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const SmartRouter = withRouter(reduxForm({form: 'newUser'})(LandingPage));

export default SmartRouter