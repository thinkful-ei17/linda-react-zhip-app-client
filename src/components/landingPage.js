import React from 'react';
import {createNewUser} from '../actions/actions';
import {reduxForm} from 'redux-form';
import {withRouter} from 'react-router-dom';

import '../css/landingPage.css';

export class LandingPage extends React.Component{
  componentDidMount(){
    console.log('testing wires for LandingPage');
  }

  onSubmit() {
    this.props.dispatch(createNewUser()).then(results => {
      if(results === '1'){
        this.props.history.push('/r')
      }
      return results 
    })
  }
  
  render(){
    return (
      <div id='landingpage'>
      <div className='intro-message'>Hello World, welcome to Zhip!</div>
        <form className='new-user-form' onSubmit={this.props.handleSubmit(() => this.onSubmit())}>
          <p>Send and receive IOUs between you and anyone else without needing their account information.</p>
          <p>All you need is a secured Zhip account ID.</p>
          <p className='attention-stmt'>Let's Get Started!</p>
           <button className='secure-id-btn' type="submit">Secure New Account ID</button>
        </form>
      </div>
    );
  }
}

const SmartRouter = withRouter(reduxForm({form: 'newUser'})(LandingPage));

export default SmartRouter