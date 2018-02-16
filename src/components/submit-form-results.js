import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
//import {initiateTransaction} from '../actions/actions';
import {REACT_APP_API_BASE_URL} from '../config';

export class SubmitTransactionResults extends React.Component {
    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const transaction = this.props.transactionAmount;
        const transactionLink = `${REACT_APP_API_BASE_URL}/transaction/receive/${this.props.transactionId}`

        return (
            <div className="transaction-details">
                <p>IOU Successfully Created!</p>
                <p>IOU Amount: {transaction} </p>
                <p>Send this unique link to the recipient!</p>
                <p>{transactionLink}</p>
            </div>
        );
    }

    render() {
        return (
            <div className="transaction-section">
                    {this.renderResults()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    transactionAmount: state.transactionAmount,
    transactionId: state.transactionId,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(SubmitTransactionResults);
