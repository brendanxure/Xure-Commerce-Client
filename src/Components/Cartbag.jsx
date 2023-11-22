import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { allProduct } from '../features/cart/CartSlice'
import { serverUrl } from '../Utils/ServerUrl'

const Cartbag = () => {
    const cart = useSelector(allProduct)

    const checkout = async() => {
        try {
            const res = await axios.post(`${serverUrl}/api/payment/stripe`, {})
            console.log(res.data)
            window.location.href = res.data
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-full p-4'>
        <h1 className='text-3xl text-center my-4'>YOUR BAG</h1>
        <div className='flex-wrap text-center md:flex w-full md:justify-between items-center'>
            <button className='outline outline-1 outline-black/90 py-2 px-4'>CONTINUE SHOPPING</button>
            <div className='my-4 md:my-0'>
                <a className='px-2'>Shopping Bag({cart?.quantity})</a>
                <a className='px-2'>Your Wishlist (0)</a>
            </div>
            <button className='bg-black/90 text-white px-4 py-2'>CHECKOUT NOW</button>
        </div>
        <div className='md:flex flex-wrap w-full my-6'>
            <div className='basis-2/3'>
                {cart?.products?.map((product)=> <>
                <div className='flex justify-center'>
                    <img className='basis-1/4 max-w-[20vw]' src={product?.img} />
                    <div className='basis-2/4 ml-4 flex flex-col justify-evenly'>
                        <h1>Product: {product?.title}</h1>
                        <p>ID: {product?._id}</p>
                        <div className='w-6 h-6 rounded-full bg-black'></div>
                        <p>Size: {product?.size}</p>
                    </div>
                    <div className='basis-1/4 flex flex-col justify-center'>
                        <span className='text-2xl flex'>
                            <h1 className='mr-4'>-</h1>
                            <h1 className='mr-4'>{product?.quantity}</h1>
                            <h1 className='mr-4'>+</h1>
                        </span>
                        <h1 className='text-xl md:text-3xl my-4'>${product?.price * product?.quantity}</h1>
                    </div>
                </div>
                <hr className='outline outline-1 outline-gray-200 my-8 w-[98%]'></hr>
                 </>)}
            </div>
            <div className='p-4 rounded-xl outline outline-1 outline-gray-200 basis-1/3 max-h-[70vh] md:mt-0 mt-6'>
                <h1 className='text-4xl my-4'>ORDER SUMMARY</h1>
                <ul className='flex flex-col leading-10 my-4 text-xl'>
                    <ol>Subtotal: ${cart?.total}</ol>
                    <ol>Estimated Shipping: $5.90</ol>
                    <ol>Shipping Discount: -$5.90</ol>
                    <ol className='text-3xl font-bold my-2'>Total: ${cart?.total}</ol>
                </ul>
                <button className='bg-black/90 outline outline-2 outline-gray-400 text-white w-full py-2 px-4 my-4' onClick={checkout}>CHECKOUT NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Cartbag