import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../css/sidebar.css';


export function Sidebar(props) {

    return (
        <div className="sidebar sidebar-left">
            <div className='application-name'>
                Zhip
            </div>
            <nav className="menu">
                <ul className="menu-list">
                    <li key="app-home" className="app-home menu-list-item">
                        <Link to={`/home`} className='link'>
                            Home
                        </Link>
                    </li>
                    <li key="initiate-transaction" className="initiate-transaction menu-list-item ">
                        <Link to={`/create`} className='link'>
                            New IOU
                        </Link>
                    </li>
                    <li key="show-balance" className="show-balance menu-list-item ">
                        <Link to={`/balance`} className='link'>
                            IOU Balance
                        </Link>
                    </li>
                    <li key="show-activity" className="show-activity menu-list-item ">
                        <Link to={`/activity`} className='link'>
                            IOU Activity
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(Sidebar);
