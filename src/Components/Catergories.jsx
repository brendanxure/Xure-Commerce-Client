import React, { useState } from 'react'
import { catergory } from '../Data'

const Catergories = () => {
    const [items, setItems] = useState(catergory)

  return (
    <div>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 p-4 w-full'>
            {items.map((item, id)=>
            <div className='m-4 relative min-w-[30vw] max-h-[100vh]'>
                <img src={item.img} />
                <div className='absolute top-0 h-full w-full flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white'>{item.title}</h1>
                    <button className='mt-4 bg-white p-2 text-gray-600'>SHOP NOW</button>
                </div>
            </div> )}
        </div>
    </div>
  )
}

export default Catergories