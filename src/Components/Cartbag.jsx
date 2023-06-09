import React from 'react'

const Cartbag = () => {
  return (
    <div className='w-full p-4'>
        <h1 className='text-3xl text-center my-4'>YOUR BAG</h1>
        <div className='flex-wrap text-center md:flex w-full md:justify-between items-center'>
            <button className='outline outline-1 outline-black/90 py-2 px-4'>CONTINUE SHOPPING</button>
            <div className='my-4 md:my-0'>
                <a className='px-2'>Shopping Bag(2)</a>
                <a className='px-2'>Your Wishlist (0)</a>
            </div>
            <button className='bg-black/90 text-white px-4 py-2'>CHECKOUT NOW</button>
        </div>
        <div className='md:flex flex-wrap w-full my-6'>
            <div className='basis-2/3'>
                <div className='flex justify-center'>
                    <img className='basis-1/4 max-w-[20vw]' src='https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400' />
                    <div className='basis-2/4 ml-4 flex flex-col justify-evenly'>
                        <h1>Product: Louis Vuitton</h1>
                        <p>ID: 547287469</p>
                        <div className='w-6 h-6 rounded-full bg-black'></div>
                        <p>Size: 39</p>
                    </div>
                    <div className='basis-1/4 flex flex-col justify-center'>
                        <span className='text-2xl flex'>
                            <h1 className='mr-4'>-</h1>
                            <h1 className='mr-4'>1</h1>
                            <h1 className='mr-4'>+</h1>
                        </span>
                        <h1 className='text-xl md:text-3xl my-4'>$30</h1>
                    </div>
                </div>
                <hr className='outline outline-1 outline-gray-200 my-8 w-[98%]'></hr>
                <div className='flex'>
                    <img className='basis-1/4 max-w-[20vw]' src='https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400' />
                    <div className='basis-2/4 ml-4 flex flex-col justify-evenly'>
                        <h1>Product: Louis Vuitton</h1>
                        <p>ID: 547287469</p>
                        <div className='w-6 h-6 rounded-full bg-black'></div>
                        <p>Size: 39</p>
                    </div>
                    <div className='basis-1/4 flex flex-col justify-center'>
                        <span className='text-2xl flex'>
                            <h1 className='mr-4'>-</h1>
                            <h1 className='mr-4'>1</h1>
                            <h1 className='mr-4'>+</h1>
                        </span>
                        <h1 className='text-xl md:text-3xl my-4'>$30</h1>
                    </div>
                </div>
            </div>
            <div className='p-4 rounded-xl outline outline-1 outline-gray-200 basis-1/3 max-h-[70vh] md:mt-0 mt-6'>
                <h1 className='text-4xl my-4'>ORDER SUMMARY</h1>
                <ul className='flex flex-col leading-10 my-4 text-xl'>
                    <ol>Subtotal: $80</ol>
                    <ol>Estimated Shipping: $5.90</ol>
                    <ol>Shipping Discount: -$5.90</ol>
                    <ol className='text-3xl font-bold my-2'>Total: $80</ol>
                </ul>
                <button className='bg-black/90 outline outline-2 outline-gray-400 text-white w-full py-2 px-4 my-4'>CHECKOUT NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Cartbag