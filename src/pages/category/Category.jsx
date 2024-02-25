import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Category.css'

const Category = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className='container1'><Navbar/>
    <h1>Manage <span>Category</span></h1>
    </div>
  </div>
  )
}
export default Category
