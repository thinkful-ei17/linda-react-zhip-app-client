import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, correctCharLength} from '../validators/submit-form-validator';
import Input from './input';
import {claimTransaction} from '../actions/actions';
import {withRouter} from 'react-router-dom';

import '../css/claim-form.css';

export class ClaimForm extends React.Component{
  onSubmit(values) {
    const transactionId = this.props.match.params.transactionId;
    this.props.dispatch(claimTransaction(values, transactionId));
    this.props.history.push('/ct');
  }
 
  render() {
    return (
      <section className='claim-form'>
      <div className='title'>Claim IOU</div>
        <div id='claim-form'>
      <form autoComplete="off" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field component={Input} type="text" element="input" name="userIdClaimer" value="" id="userIdClaimer" validate={[required, notEmpty,correctCharLength]} label="Zhip ID"/>
        <div className='button-holder'>
        <button type="submit">Submit</button>
        </div>
      </form>
      </div>
      <div className='direction'>
        <p>Input your Zhip ID to claim the IOU.</p>
      </div>
      </section>
    );
  }
}  

const SmartRouter = withRouter(reduxForm({form: 'claim'})(ClaimForm));

export default SmartRouter