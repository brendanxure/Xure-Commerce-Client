import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addProduct } from '../features/cart/CartSlice'
import { serverUrl } from '../Utils/ServerUrl'

const SingleProduct = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const dispatch = useDispatch()

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize]= useState('')

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

    const onQuantityClick = (format)=> {
        if(format === '+') {
            setQuantity((prev)=> prev + 1)
        } else {
            if(quantity > 1){
                setQuantity((prev)=> prev - 1)
            }
        }
    }

    const onAddCart = () => {
        dispatch(addProduct({...product, quantity, color, size}))
    }

  return (
    <div className='flex-wrap justify-center my-8 mx-4 md:flex'>
         <img src={product?.img} alt="" className='basis-1/2 p-4' />
        <div className='basis-1/2 flex flex-col p-4'>
            <h1 className='text-5xl'>{product?.title}</h1>
            <p className='mt-8'>{product?.desc}</p>
            <h1 className='text-5xl mt-8'>$ {product?.price}</h1>
            <div className='flex mt-8'>
                <div className='flex'>
                    <h1 className='mr-2 text-xl'>Colour:</h1>
                    {product?.color?.map((eachColor, id)=> 
                    <div key={id} onClick={()=> setColor(eachColor)} className={`bg-${eachColor === 'black' ? eachColor + '/90' : eachColor ==='white' ? eachColor + " " + "outline outline-1" : eachColor + '-500'} w-6 h-6 rounded-xl mr-2`}></div>
                    )}
                    {/* <div className='bg-black/90 w-6 h-6 rounded-xl mr-2'></div>
                    <div className='bg-blue-500 w-6 h-6 rounded-xl mr-2'></div>
                    <div className='bg-gray-500 w-6 h-6 rounded-xl'></div> */}
                </div>
                <div className='flex text-xl ml-10'>
                    <h2 className='mr-2'>Size</h2>
                    <select onChange={(e)=> setSize(e.target.value)} className='outline outline-1 px-2' name="" id="">
                    <option disabled value="">Size</option>
                    {product?.size?.map((data)=> 
                    <option value={data}>{data}</option>
                    )}
                    {/* <option value="">XS</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option> */}
                    </select>
                </div>
            </div>
            <div className='flex mt-8 items-center'>
                <div className='flex text-2xl items-center'>
                    <h1 className='mr-4 cursor-pointer'onClick={()=>onQuantityClick('-')}>-</h1>
                    <h1 className='mr-4 outline outline-2 rounded-xl outline-blue-400 px-4 py-1'>{quantity}</h1>
                    <h1 className='mr-4 cursor-pointer'onClick={()=>onQuantityClick('+')}>+</h1>
                </div>
                <button className='outline px-4 py-2 outline-2 outline-teal-400 ml-10' onClick={onAddCart}>ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct