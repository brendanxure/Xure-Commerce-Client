import React, { useState } from 'react'
import { products } from '../Data'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = ({category, sort, filter}) => {
    const [items, setItems] = useState(products)

    const [product, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

  return (
    <div>
        <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 p-4'>
            {items.map((item, id)=> 
            <div className='relative p-8 m-3 bg-teal-100 z-10 h-[50vh] group'>
                <section className='w-full h-full absolute top-0 left-0 flex justify-center items-center -z-10'>
                    <div className='bg-white lg:min-h-[240px] lg:w-[240px] rounded-full'></div>
                </section>
                <img src={item.img} className="p-4"/>
                <div className='absolute left-0 top-0 w-full h-full invisible group-hover:visible hover:bg-black/20 justify-center items-center flex'>
                <ShoppingCartOutlinedIcon className='bg-red-100 mx-2 rounded-full cursor-pointer'/>
                <SearchOutlinedIcon className='bg-red-100 mx-2 h-[30px] rounded-full cursor-pointer'/>
                <FavoriteBorderOutlinedIcon className='bg-red-100 mx-2 h-[30px] rounded-full cursor-pointer'/>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Product