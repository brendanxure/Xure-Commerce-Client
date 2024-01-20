import React, { useEffect, useState } from 'react'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { publicRequest } from '../Utils/RequestMethod';
import axios from 'axios';
import { serverUrl } from '../Utils/ServerUrl';
import { Link } from 'react-router-dom';

const Product = ({category, sort, filter}) => {


    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    console.log(filteredProducts)
    useEffect(()=> {
        const getProducts = async () => {
            try {
                const res = await axios.get(category ? `${serverUrl}/api/product?category=${category}` 
                 : `${serverUrl}/api/product/`)
                console.log(res.data)
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [category])

    useEffect(()=> {
        category && setFilteredProducts(
            products?.filter(item => Object.entries(filter).every(([key, value]) => item[key]?.find(sorted=> sorted.includes(value))))
        )
        console.log(filteredProducts)
    }, [category, sort, filter, products])

    useEffect(()=> {
        if(sort === 'newest'){
            setFilteredProducts(prev=> [...prev].sort((a, b)=> a.createdAt - b.createdAt))
        } else if(sort === 'asc'){
            setFilteredProducts(prev=> [...prev].sort((a, b)=> a.price - b.price))
        } else {
            setFilteredProducts(prev=> [...prev].sort((a, b)=> b.price - a.price))
        }
    }, [sort])


  return (
    <div>
        <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 p-4'>
            {category ? filteredProducts?.map((item, id)=> 
            <div className='relative p-8 m-3 bg-teal-100 z-10 h-[50vh] group'>
                <section className='w-full h-full absolute top-0 left-0 flex justify-center items-center -z-10'>
                    <div className='bg-white lg:min-h-[240px] lg:w-[240px] rounded-full'></div>
                </section>
                <img src={item.img} className="p-4"/>
                <div className='absolute left-0 top-0 w-full h-full invisible group-hover:visible hover:bg-black/20 justify-center items-center flex'>
                <ShoppingCartOutlinedIcon className='bg-red-100 mx-2 rounded-full cursor-pointer'/>
                <Link to={`/product/${item._id}`}>
                <SearchOutlinedIcon className='bg-red-100 mx-2 h-[30px] rounded-full cursor-pointer'/>
                </Link>
                <FavoriteBorderOutlinedIcon className='bg-red-100 mx-2 h-[30px] rounded-full cursor-pointer'/>
                </div>
            </div>
            ): products.slice(0, 8)?.map((item, id)=> 
            <div className='relative p-8 m-3 bg-teal-100 z-10 h-[50vh] group'>
                <section className='w-full h-full absolute top-0 left-0 flex justify-center items-center -z-10'>
                    <div className='bg-white lg:min-h-[240px] lg:w-[240px] rounded-full'></div>
                </section>
                <img src={item.img} className="p-4"/>
                <div className='absolute left-0 top-0 w-full h-full invisible group-hover:visible hover:bg-black/20 justify-center items-center flex'>
                <ShoppingCartOutlinedIcon className='bg-red-100 mx-2 rounded-full cursor-pointer'/>
                <Link to={`/product/${item._id}`}>
                <SearchOutlinedIcon className='bg-red-100 mx-2 h-[30px] rounded-full cursor-pointer'/>
                </Link>
                <FavoriteBorderOutlinedIcon className='bg-red-100 mx-2 h-[30px] rounded-full cursor-pointer'/>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Product