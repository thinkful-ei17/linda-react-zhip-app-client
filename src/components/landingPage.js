import React from 'react';
import {createNewUser} from '../actions/actions';
import {reduxForm} from 'redux-form';

export class LandingPage extends React.Component{
  componentDidMount(){
    console.log('testing wires for LandingPage');
  }

  onSubmit() {
    console.log('newUser - form component, onSubmit button was triggered, dispatch createNew User');

    return this.props.dispatch(createNewUser());
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

export default reduxForm({
form: 'newUser'
})(LandingPage);