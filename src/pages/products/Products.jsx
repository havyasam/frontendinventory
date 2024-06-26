import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Brandmodal from '../../components/Brandmodal/Brandmodal';
import './Products.css'
export const Products = () => {
  const navigate = useNavigate();
  const [brandmodal,setbrandmodal]=useState(false)
  const { id } = useParams();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/products')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete=(product_no)=>{
    axios.delete('/api/v1/products/'+product_no)
      .then(response => {
        window.location.reload(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className='home'>
    <Sidebar/>
    <div className='container1'><Navbar/>
    <div className='contain23'>
    {/* <span className='manage'>Manage <span>Vehicles</span></span>
    <br /> */}
    <br />
     <span className='manage'>MANAGE VEHICLES</span>
     <br /><br />
    {brandmodal&&<Brandmodal onClose={()=>setbrandmodal(false)}/>}
    <button onClick={()=>setbrandmodal(true)} className="brandbutton">Add Button</button>
    <div className='brandmain'>
     
     
      <table border='2'>
        <tr>
          <th>REGISTRATION NUMBER</th>
          <th>VEHICLE NAME</th>
          <th>COLOR</th>
          <th>SIZE</th>
          <th>MAKER</th>
          
          
          
          
          <th colspan='2'>ACTION</th>
        </tr>
        
        {products.map(product => (
                <tr key={product.product_no}>
                  <td>{product.product_no}</td>
                  <td>{product.product_name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.color}</td>
                  <td>{product.size}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.store}</td>
                  <td>{product.availability}</td>
                 
                  <td><Link to={`/productedit/${product.product_no}/${product.product_name}`}  ><button className='edit'>edit</button></Link></td>
                  <td><button className='delete' onClick={()=>handleDelete(product.product_no)}>delete</button></td>
                </tr>
              ))}
      </table>
    </div>
    </div>
  </div>
  </div>
  )
}
export default Products
