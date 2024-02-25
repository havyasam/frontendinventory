import React from 'react'
import './Orders.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

export const Orders = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='container1'><Navbar/>
      <h1>Manage <span>Orders</span></h1>
      </div>
    </div>
  )
}
export default Orders
