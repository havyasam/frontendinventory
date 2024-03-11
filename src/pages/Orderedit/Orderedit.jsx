import { mergeBreakpointsInOrder } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Orderedit = () => {
    const navigate = useNavigate();
    const { id ,ord_name} = useParams();
    console.log(id)
    const [order, setOrder] = useState({ id: id, ord_name: '' });

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/orders/'+id);
            const { ord_name } = response.data[0];
            console.log(ord_name)
            setOrder({ ...order, ord_name: ord_name });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
    
        setOrder({id,ord_name})
    }, [id]);

    const submitOrder = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/v1/orders/`+id);
            console.log('Success');
            navigate("/orders");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='brandmain'>
            <div className='brndback'></div>
            <div className='brandmodalmain'>
                <h1>Edit Store</h1>
                <form onSubmit={submitOrder}>
                    <br />
                    <div>
                        <label htmlFor="storeName">Name: </label>
                        <input type="text" placeholder='Enter order name' name='orderName' value={order.ord_name} onChange={e => setOrder({ ...order, ord_name: e.target.value })} />
                    </div>
                    <br />
                    <button type="submit" className='updatebtn'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Orderedit;
