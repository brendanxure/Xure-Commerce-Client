import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Newsletter = () => {
  return (
    <div className='grid items-center justify-center text-center w-full py-10 bg-pink-100'>
        <h1 className='text-4xl md:text-6xl my-6 font-bold'>Newsletter</h1>
        <p className='text-xl md:text-2xl'>Get timely update from your favourite products.</p>
        <div className='my-6 flex w-full outline outline-1 outline-gray-400'>
            <input className='outline-none basis-100 w-full px-2' type='text' placeholder='Your email' />
            <AiOutlineSend className='basis-20 bg-teal-500 px-4 cursor-pointer'size={40}/>
        </div>
    </div>
  )
}

export default Newsletter