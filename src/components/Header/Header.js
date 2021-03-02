import React from 'react';
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar';


const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <MenuSharpIcon></MenuSharpIcon>
                <img
                className="header-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
            </div>
            
            <div className="header-input">
                <input 
                type="text"
                placeholder="Search"
                />
                <SearchSharpIcon className="header-inputButton"></SearchSharpIcon>
            </div>
            
            <div className="header-icons">
                <VideoCallSharpIcon className='VideoCallSharpIcon'></VideoCallSharpIcon>
                <AppsSharpIcon  className='AppsSharpIcon'></AppsSharpIcon>
                <NotificationsSharpIcon  className='NotificationsSharpIcon'></NotificationsSharpIcon>
                <Avatar
                alt='Sakib'
                src='https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg'
                ></Avatar>
            </div>
        </div>
    );
};

export default Header;