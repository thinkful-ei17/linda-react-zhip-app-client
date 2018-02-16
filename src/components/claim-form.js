import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, correctCharLength} from '../validators/submit-form-validator';
import Input from './input';
import {claimTransaction} from '../actions/actions';

export class ClaimForm extends React.Component{
  onSubmit(values) {
    console.log('claim-form component, onSubmit button was triggered, dispatch claimTransaction action which will also dispatch account update');
    const transactionId = this.props.match.params.transactionId;
    return this.props.dispatch(claimTransaction(values, transactionId));
  }
 
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field component={Input} type="text" element="input" name="userIdClaimer" value="" id="userIdClaimer" validate={[required, notEmpty,correctCharLength]} label="Input your user id"/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}  

export default reduxForm({
  form: 'claim'
})(ClaimForm);