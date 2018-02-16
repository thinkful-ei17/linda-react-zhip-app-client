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
                        <Link to={`/submit`} className='link'>
                            New IOU
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
