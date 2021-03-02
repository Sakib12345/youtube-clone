import React from 'react';
import './SidebarRow.css';


const SidebarRow = ({Icon, title}) => {
    return (
        <div className="sidebar-row">
            <Icon className="sidebarRow-icon"></Icon>
            <h2 className="sidebarRow-title">{title}</h2>
        </div>
    );
};

export default SidebarRow;