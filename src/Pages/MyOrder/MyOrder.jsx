import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

export default function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if(index === 'last') index = context.order?.length - 1;


  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-5'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1> My Order</h1>
      </div>
      
      <div className='flez flex-col w-80'>
        {
            context.order?.[index]?.products.map((product) => (
                <OrderCard title ={product.title} imageUrl={product.images} price={product.price} key ={product.id} id={product.id}/>
            ))
        }
      </div>

    </Layout>
  )
}
