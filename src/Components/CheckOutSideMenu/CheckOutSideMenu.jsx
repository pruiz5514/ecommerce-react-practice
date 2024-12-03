import React, { useContext } from 'react'
import './CheckOutSideMenu.css'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard/OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';

const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div className='cursor-pointer' onClick={context.closeCheckoutSideMenu}><XMarkIcon className='h-6 w-6 text-black'/></div>
        </div>
        <div className='px-6 overflow-y-scroll py-2 flex-1'>
            {
                context.cartProducts?.map((product) => (
                    <OrderCard title ={product.title} imageUrl={product.images} price={product.price} key ={product.id} handleDelete={handleDelete} id={product.id}/>
                ))
            }
        </div>
        <div className='px-6 mb-2'>
            <p className='flex justify-between items-center mb-2'>
                <span className='font-light'>Total: </span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
            </p>

            <Link to='/my-order/last'>
                <button className='w-full bg-black py-3 text-white rounded-lg' onClick={()=> handleCheckout()}>Checkout</button>
            </Link>
        </div>

    </aside>
  )
}

export default CheckOutSideMenu