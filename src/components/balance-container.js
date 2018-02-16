import React from 'react';
import {connect} from 'react-redux';
import Balance from './balance';
import '../css/balance.css';

export class BalanceContainer extends React.Component {
    
    render(props) {
        return (
            <div className="balance-section">
                <Balance accountBalance={this.props.accountBalance} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    accountBalance: state.appReducer.accountBalance,
});

export default connect(mapStateToProps)(BalanceContainer);