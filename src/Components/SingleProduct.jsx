import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { serverUrl } from '../Utils/ServerUrl'

const SingleProduct = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const [product, setProduct] = useState({})

    useEffect(()=> {
        const getProduct = async() => {
            try {
                const res = await axios.get(`${serverUrl}/api/product/${id}`)
                setProduct(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [id])

  return (
    <div className='flex-wrap justify-center my-8 mx-4 md:flex'>
         <img src={product?.img} alt="" className='basis-1/2 p-4' />
        <div className='basis-1/2 flex flex-col p-4'>
            <h1 className='text-5xl'>{product?.title}</h1>
            <p className='mt-8'>{product?.desc}</p>
            <h1 className='text-5xl mt-8'>$ 20</h1>
            <div className='flex mt-8'>
                <div className='flex'>
                    <h1 className='mr-2 text-xl'>Colour:</h1>
                    <div className='bg-black/90 w-6 h-6 rounded-xl mr-2'></div>
                    <div className='bg-blue-500 w-6 h-6 rounded-xl mr-2'></div>
                    <div className='bg-gray-500 w-6 h-6 rounded-xl'></div>
                </div>
                <div className='flex text-xl ml-10'>
                    <h2 className='mr-2'>Size</h2>
                    <select className='outline outline-1 px-2' name="" id="">
                    <option value="">XS</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                    </select>
                </div>
            </div>
            <div className='flex mt-8 items-center'>
                <div className='flex text-2xl items-center'>
                    <h1 className='mr-4'>-</h1>
                    <h1 className='mr-4 outline outline-2 rounded-xl outline-blue-400 px-4 py-1'>1</h1>
                    <h1 className='mr-4'>+</h1>
                </div>
                <button className='outline px-4 py-2 outline-2 outline-teal-400 ml-10'>ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct