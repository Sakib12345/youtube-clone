import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';
import './Sidebar.css';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow Icon={HomeSharpIcon} title='Home'></SidebarRow>
            <SidebarRow Icon={WhatshotSharpIcon} title='Trending'></SidebarRow>
            <SidebarRow Icon={SubscriptionsSharpIcon} title='Subscription'></SidebarRow>
        </div>
    );
};

export default Sidebar;