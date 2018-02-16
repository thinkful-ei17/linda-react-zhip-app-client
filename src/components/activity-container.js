import React from 'react';
import {connect} from 'react-redux';
import '../css/activity.css';

export function ActivityContainer({transactionsList}) {
        const transactions = transactionsList.map(transaction => (
            <li className='transactions-list-transaction' key={transaction._id}>
                <div className='transaction-container'>
                    <div className='transactions-list-transaction-id'><span className='key-name'>IOU ID:</span> {transaction._id}</div>
                    <div className='transactions-list-transaction-amount'><span className='key-name'>IOU Amount:</span>{transaction.transactionAmount}</div>
                </div>
            </li>
        ));

        return (
            <div className="activity-section">
                <div className='title'>Activity</div>
                <ul className='transactions-list'> {transactions} </ul>
            </div>
        );
}

const mapStateToProps = state => ({
    transactionsList: state.appReducer.transactionsList,
});

export default connect(mapStateToProps)(ActivityContainer);