import React from 'react';
import {connect} from 'react-redux';
import Placeholder from './placeholder';

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