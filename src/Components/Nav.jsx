import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { allProduct } from '../features/cart/CartSlice';

const Nav = () => {
const {products, quantity, total} = useSelector(allProduct)
console.log(quantity)
const all = useSelector(allProduct)
console.log(all)

  return (
    <div className='flex flex-col md:flex-row w-full px-4 py-2 items-center justify-center'>
      <div className='hidden basis-1/3 md:flex gap-4 items-center'>
        <h2>EN</h2>
        <div className='flex ring ring-black/40 ring-1 max-h-8 p-2 items-center'>
          <input placeholder='Search' type='text' className='outline outline-none '/>
          <SearchIcon />
        </div>
      </div>
      <div className='basis-1/3 flex align-center justify-center text-3xl font-bold'>
        XURE
      </div>
      <div className='basis-1/3 flex justify-end md:mt-0 mt-2'>
        <h2 className='mx-4 cursor-pointer'>Register</h2>
        <h2 className='mx-4 cursor-pointer'>Login</h2>
        <Badge badgeContent={quantity} color="primary" className='mx-4 cursor-pointer'>
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
      </div>
    </div>
  )
}

export default Nav