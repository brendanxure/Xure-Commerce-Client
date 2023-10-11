import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Product from './Product'

const ProdListFilter = () => {
    const location = useLocation()
    const category = location.pathname.split("/")[2]
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const onChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFilter((prevState)=> ({
            ...prevState,
            [name]: value
        }))
    }
    console.log(filter)

  return (
    <div>
        <div className='p-6'>
            <h1 className='text-3xl font-bold'>{category}</h1>
            <div className='flex justify-between mt-4'>
                <div className='flex'>
                    <h1 className='mr-2 text-2xl font-bold'>Filter Products:</h1>
                    <select name="color" id="" onChange={onChange} className=' outline outline-2 outline-black mr-2'>
                        <option disabled value="" className=''>Colour</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                    <select name="size" id="" onChange={onChange} className=' outline outline-2 outline-black'>
                        <option disabled value="" className=''>Size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div className='flex'>
                    <h1 className='mr-2 text-2xl font-bold'>Sort Products:</h1>
                    <select name="" onChange={(e)=> setSort(e.target.value)} id="sort" className=' outline outline-2 outline-black'>
                        <option value="newest" className=''>Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </div>
            </div>
        </div>
        <Product category={category} filter={filter} sort={sort} />
    </div>
  )
}

export default ProdListFilter