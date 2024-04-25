
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Brandmodal from '../../components/Brandmodal/Brandmodal'
import './Stores.css'
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const Stores = () => {

  const navigate = useNavigate();
  const [brandmodal,setbrandmodal]=useState(false)
  const { id } = useParams();
  const [stores, setStore] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/stores')
      .then(response => {
        setStore(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete=(store_no)=>{
    axios.delete('/api/v1/stores/'+store_no)
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
    <div className='contain21'>
      <br />
      <span className='manage'>MANAGE EMPLOYEE</span>
      <br /><br />
   
    {brandmodal&&<Brandmodal onClose={()=>setbrandmodal(false)}/>}
    <button onClick={()=>setbrandmodal(true)} className="brandbutton">Add Button</button>
    <div className='brandmain'>
     
     
      <table border='2'>
        <tr>
          <th>EMPLOYEE ID</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th colspan='2'>ACTION</th>
        </tr>
        
        {stores.map(store => (
                <tr key={store.store_no}>
                  <td>{store.store_no}</td>
                  <td>{store.store_name}</td>
                  <td>{store.status}</td>
                  <td><Link to={{ 
                    pathname:`/storeedit/${store.store_no}/${store.store_name}` ,
                    search:`?status=${store.status}`
                    }} ><button className='edit'>edit</button></Link></td>
                  <td><button className='delete' onClick={()=>handleDelete(store.store_no)}>delete</button></td>
                </tr>
              ))}
      </table>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Stores
