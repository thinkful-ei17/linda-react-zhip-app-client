import React from 'react';
import {connect} from 'react-redux';
import Activity from './activity';
import '../css/activity.css';

export class ActivityContainer extends React.Component {
    
    render(props) {
        return (
            <div className="activity-section">
                <Activity accountBalance={this.props.accountBalance} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    accountBalance: state.appReducer.accountBalance,
});

export default connect(mapStateToProps)(ActivityContainer);