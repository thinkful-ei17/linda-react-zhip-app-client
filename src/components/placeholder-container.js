import React from 'react';
import {connect} from 'react-redux';
//import Spinner from 'react-spinkit';
//import {initiateTransaction} from '../actions/actions';
import Placeholder from './placeholder';
import {REACT_APP_API_BASE_URL} from '../config';

export class PlaceholderContainer extends React.Component {
    
    render(props) {
        return (
            <div className="transaction-section">
                <Placeholder accountBalance={this.props.accountBalance} userId={this.props.userId} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userId: state.appReducer.userId,
    accountBalance: state.appReducer.accountBalance
});

export default connect(mapStateToProps)(PlaceholderContainer);


 // renderResults() {
    //     if (this.props.loading) {
    //         return <Spinner spinnerName="circle" noFadeIn />;
    //     }

    //     if (this.props.error) {
    //         return <strong>{this.props.error}</strong>;
    //     }

    //     const transaction = this.props.transactionAmount;
    //     const transactionLink = `${REACT_APP_API_BASE_URL}/transaction/receive/${this.props.transactionId}`

    //     return (
    //         <div className="transaction-details">
    //             <p>IOU Successfully Created!</p>
    //             <p>IOU Amount: {transaction} </p>
    //             <p>Send this unique link to the recipient!</p>
    //             <p>{transactionLink}</p>
    //         </div>
    //     );
    // }
