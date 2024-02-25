import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
export const Products = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='container1'><Navbar/>
        <h1>Manage <span>Products</span></h1>
      </div>
      
    </div>
  )
}
export default Products
