import React from 'react';
import {createNewUser} from '../actions/actions';
import {reduxForm} from 'redux-form';
import {withRouter} from "react-router-dom";
// import React from "react";
// import {withRouter} from "react-router-dom";

// class MyComponent extends React.Component {
//   ...
//   myFunction() {
//     this.props.history.push("/some/Path");
//   }
//   ...
// }
// export default withRouter(MyComponent);

export class LandingPage extends React.Component{
  componentDidMount(){
    console.log('testing wires for LandingPage');
  }

  onSubmit() {
    console.log('newUser - form component, onSubmit button was triggered, dispatch createNew User');
    
    const res = this.props.dispatch(createNewUser()).then(results => {
      if(results === '1'){
        this.props.history.push('/r')
      }
      return results 
    })

    console.log('what is results for onSubmit', res);
    
  }
  
  render(){
    console.log('this is this.props', this.props);
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

const StupidPlaceholder = withRouter(reduxForm({form: 'newUser'})(LandingPage));

export default StupidPlaceholder
// export default reduxForm({form: 'newUser'})(LandingPage);
// export default withRouter(MyComponent);

// class TextComponentPresentational extends React.Component {
//   ...
// }

// const TextComponent = withResource(withSocket(withNotifications(TextComponentPresentational )))

// export default TextComponent