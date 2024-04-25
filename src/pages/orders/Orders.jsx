import React, { useEffect,useState } from 'react'
import axios from 'axios';
import './Orders.css'
import Brandmodal from '../../components/Brandmodal/Brandmodal';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'


export const Orders = () => {
  const navigate = useNavigate();
  const [brandmodal,setbrandmodal]=useState(false)
  const { id } = useParams();
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/orders')
      .then(response => {
        setOrder(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete=(cust_id)=>{
    axios.delete('/api/v1/orders/'+cust_id)
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
    <div className='contain22'>
      <br />
    <span className='manage'>MANAGE CLIENT</span>
    <br /><br />
    {brandmodal&&<Brandmodal onClose={()=>setbrandmodal(false)}/>}
    <button onClick={()=>setbrandmodal(true)} className="brandbutton">Add Button</button>
    <div className='brandmain'>
     
     
      <table border='2'>
        <tr>
          <th>CLIENT ID</th>
          <th>CLIENT NAME</th>
          <th>CLIENT ADDRESS</th>
          <th>PHONE</th>
          <th>AMOUNT</th>
          <th>STATUS</th>
          
          
          <th colspan='2'>ACTION</th>
        </tr>
        
        {orders.map(order => (
                <tr key={order.cust_id}>
                  <td>{order.cust_id}</td>
                  <td>{order.cust_name}</td>
                  <td>{order.cust_address}</td>
                  <td>{order.phone}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>{order.amount}</td>
                  <td>{order.status}</td> 
                 
                  <td><Link to={`/orderedit/${order.cust_id}/${order.cust_name}`}  ><button className='edit'>edit</button></Link></td>
                  <td><button className='delete' onClick={()=>handleDelete(order.cust_id)}>delete</button></td>
                </tr>
              ))}
      </table>
    </div>
    </div>
  </div>
  </div>
  )
}
export default Orders
