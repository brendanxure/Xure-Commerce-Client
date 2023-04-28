import React from 'react'

const Footer = () => {
  return (
    <div className='flex-wrap md:flex w-full py-4 px-4 my-2 justify-center'>
        <div className='basis-1/3 px-4'>
            <h1 className='text-2xl md:text-3xl font-bold my-2'>XURE</h1>
            <p className=' mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium numquam quis minus fugit itaque aliquam reiciendis, quaerat quam vitae labore laboriosam facilis, voluptatibus perspiciatis sit nam reprehenderit voluptas delenitighs vero!</p>
        </div>
        <div className='basis-1/3 px-4'>
            <h1 className='text-xl font-bold my-2'>Useful Links</h1>
            <section className='flex mt-4 text-lg'>
                <ul className='basis-1/2 leading-8'>
                    <ol>Home</ol>
                    <ol>Man Fashion</ol>
                    <ol>Accessories</ol>
                    <ol>Order Tracking</ol>
                    <ol>Wishlist</ol>
                </ul>
                <ul className='basis-1/2 leading-8'>
                    <ol>Cart</ol>
                    <ol>Woman Fashion</ol>
                    <ol>My Account</ol>
                    <ol>Wishlist</ol>
                    <ol>Terms</ol>
                </ul>
            </section>
        </div>
        <div className='basis-1/3 px-4'>
            <h1 className='text-xl font-bold my-2'>Contact</h1>
            <section className='mt-4 text-lg leading-10'>
                <div>
                    <p>622 Dixie Path, South Tobinchester 98336</p>
                </div>
                <div>
                    <p>+1 234 56 78</p>
                </div>
                <div>
                    <p>contact@xure.dev</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Footer