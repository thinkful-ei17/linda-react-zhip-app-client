import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, correctCharLength, characterType} from '../validators/submit-form-validator';
import Input from './input';
import {initiateTransaction} from '../actions/actions';
import {withRouter} from 'react-router-dom';

import '../css/submit-form.css';

export class SubmitForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(initiateTransaction(values)).then(results => {
      if(results === '2'){
        this.props.history.push('/it')
      }
      return results
    })
  }
  render() {
    return (
      <section className='submit-form'>
      <div id='submit-form'>
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field component={Input} type="text" element="input" name="userIdInitiator" value="" id="userIdInitiator" validate={[required, notEmpty,correctCharLength]} label="Zhip ID"/>
          <Field component={Input} type="text" element="input" name="transactionAmount" value="" id="transactionAmount" label="IOU Amount" validate={[required, notEmpty, characterType]}></Field>
        <div className='button-holder'>
        <button type="submit">Submit</button>
        </div> 
      </form>
      </div>
      <div className='direction'>
        <p className='attention-stmt'>Input your Zhip ID and IOU amount.</p>
        <p>Once you submit, you'll be provided with a unique url that you can provide to any recipient!</p>
      </div>
      </section>
    );
  }
}  

const SmartRouter = withRouter(reduxForm({form: 'submit'})(SubmitForm));

export default SmartRouter