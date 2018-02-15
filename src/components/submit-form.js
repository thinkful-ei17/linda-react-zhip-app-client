import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, correctCharLength, characterType} from '../validators/submit-form-validator';
import Input from './input';
import {initiateTransaction} from '../actions/actions';

export class SubmitForm extends React.Component{
  onSubmit(values) {
    console.log('what is value for onSubmit', values);
    return this.props.dispatch(initiateTransaction(values))
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field component={Input} type="text" element="input" name="userIdInitiator" value="" id="userIdInitiator" validate={[required, notEmpty,correctCharLength]} label="Input your user id"/>
          <Field component={Input} type="text" element="input" name="transactionAmount" value="" id="transactionAmount" label="Input IOU amount" validate={[required, notEmpty, characterType]}></Field>
        <button type="submit">Submit</button>
      </form>
    );
  }
}  

export default reduxForm({
  form: 'submit'
})(SubmitForm);