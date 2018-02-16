import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../css/sidebar.css';


export function Sidebar(props) {

    return (
        <div className="sidebar sidebar-left">
            <nav className="menu">
                <ul className="menu-list">
                    <li key="app-home" className="app-home menu-list-item">
                        <Link to={`/home`}>
                            Home
                        </Link>
                    </li>
                    <li key="initiate-transaction" className="initiate-transaction menu-list-item ">
                        <Link to={`/submit`}>
                            Create IOU
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
