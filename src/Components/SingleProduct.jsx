import React from 'react'

const SingleProduct = () => {
  return (
    <div className='flex-wrap justify-center my-8 mx-4 md:flex'>
         <img src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='basis-1/2 p-4' />
        <div className='basis-1/2 flex flex-col p-4'>
            <h1 className='text-5xl'>Wool Cardigan</h1>
            <p className='mt-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil inventore iste culpa veritatis obcaecati optio itaque eius perferendis eum enim consequuntur vel officia eaque quidem, suscipit sapiente blanditiis ipsa fugit impedit. Quos, nemo fuga. Nostrum vel et ab, ipsum quas consequatur? Non deserunt amet soluta iste odit saepe, sequi vitae.</p>
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