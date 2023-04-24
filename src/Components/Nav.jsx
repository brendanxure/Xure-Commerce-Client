import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Nav = () => {
  return (
    <div className='flex flex-col md:flex-row w-full px-4 py-2 items-center justify-center gap-2 md:gap-0'>
      <div className='hidden basis-1/3 md:flex gap-4'>
        <h2>EN</h2>
        <div className='flex'>
          <input type='search' className='ring rounded-xl ring-black ring-1 max-h-6'/>
          <SearchIcon />
        </div>
      </div>
      <div className='basis-1/3 flex align-center justify-center text-3xl font-bold'>
        XURE
      </div>
      <div className='basis-1/3 flex justify-end gap-8'>
        <h2>Register</h2>
        <h2>Login</h2>
        <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
      </div>
    </div>
  )
}

export default Nav