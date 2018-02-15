import React from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';

import '../css/sidebar.css';


export function Sidebar(props) {
    // const folders = props.folderList.map(folder =>
    //     <li key={folder.id} className="folder-menu-list-item">
    //         <Link to={`/${folder.id}`}>
    //             {folder.name}
    //         </Link>
    //     </li>
    // );

    return (
        <div className="sidebar sidebar-left">
            <nav className="folder-menu">
                <ul className="folder-menu-list">
                    hi
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    folderList: Object.keys(state).map(folderId => state[folderId])
});

export default connect(mapStateToProps)(Sidebar);

//                    {folders}