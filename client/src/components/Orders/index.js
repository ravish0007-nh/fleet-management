import {useState, useEffect} from 'react'
import Order from './Order'

import FleetService from '../../fleetService'

function Machines() {
  const [orders, setOrders] = useState([]);
  // const [orders, setOrders] = useState();

  useEffect(() => {
    async function fetchData() {
      const orders = await FleetService.getOrders();
      console.log(orders)
      setOrders(orders);
    }
    fetchData();
  }, []);

  return(
    
        <div className='space-y-4 mx-auto mt-10 overflow-y-auto'>
          {orders.map((order) => {
            return (
              <Order order={order} key={order.id} />
            )
          })}
        </div>
  )
}


export default Machines
