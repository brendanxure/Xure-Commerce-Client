import React from 'react'

const ProdListFilter = () => {
  return (
    <div className='p-6'>
        <h1 className='text-3xl font-bold'>Dresses</h1>
        <div className='flex justify-between mt-4'>
            <div className='flex'>
                <h1 className='mr-2 text-2xl font-bold'>Filter Products:</h1>
                <select name="" id="" className=' outline outline-2 outline-black mr-2'>
                    <option disabled value="" className=''>Colour</option>
                    <option value="">White</option>
                    <option value="">Black</option>
                    <option value="">Red</option>
                    <option value="">Blue</option>
                    <option value="">Yellow</option>
                    <option value="">Green</option>
                </select>
                <select name="" id="" className=' outline outline-2 outline-black'>
                    <option disabled value="" className=''>Size</option>
                    <option value="">XS</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                </select>
            </div>
            <div className='flex'>
                <h1 className='mr-2 text-2xl font-bold'>Sort Products:</h1>
                <select name="" id="sort" className=' outline outline-2 outline-black'>
                    <option value="" className=''>Newest</option>
                    <option value="">Price (USD)</option>
                    <option value="">Price (NG)</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default ProdListFilter