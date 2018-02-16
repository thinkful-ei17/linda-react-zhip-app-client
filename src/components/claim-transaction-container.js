import React from 'react';
import {connect} from 'react-redux';
import ClaimTransaction from './claim-transaction';

export class ClaimTransactionContainer extends React.Component {
    
    render(props) {
        return (
            <div className="claim-section">
                <ClaimTransaction accountBalance={this.props.accountBalance} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    accountBalance: state.appReducer.accountBalance,
});

export default connect(mapStateToProps)(ClaimTransactionContainer);