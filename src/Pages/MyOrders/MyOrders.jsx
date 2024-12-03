import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import OrdersCard from '../../Components/OrdersCard/OrdersCard';


export default function MyOrders() {
  const context = useContext(ShoppingCartContext);
  
  return (
    <Layout>

        <h1 className='font-medium text-xl mb-4'> My Orders</h1>

      { 
        context.order.map((order, index)=> (
          <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
          </Link>
          
        ))
      }
      
    </Layout>
  )
}
