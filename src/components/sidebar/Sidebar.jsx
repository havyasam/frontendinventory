import  './Sidebar.css'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import React from 'react'
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='admin'>ADMIN</span>
            
        </div>
       

        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li><Link to="/"><DashboardIcon className='icon'/><span>Dashboard</span></Link></li>
                <p className='title'>LIST</p>
                <li><Link to='/users'><PersonIcon className='icon'/><span>Users</span></Link></li>
                <li><Link to='/Orders'><BorderStyleIcon className='icon'/><span>Orders</span></Link></li>
                <li><Link to='/Category'><CategoryIcon className='icon'/><span>Category</span></Link></li>
                <li><Link to='/products'><ProductionQuantityLimitsIcon className='icon'/><span>Products</span></Link></li>
                <p className='title'>USERS</p>
                <li><SettingsIcon className='icon'/><span>Setting</span></li>
                <li><LogoutIcon className='icon'/><span>Lagout</span></li>
    
            </ul>
        </div>

    </div>
  )
}
export default Sidebar