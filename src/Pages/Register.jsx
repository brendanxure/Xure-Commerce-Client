import React from 'react'

const Register = () => {
  return (
    <div className='h-screen w-full  bg-[url(https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)]'>
        <div className='h-full w-full bg-gradient-to-r from-black/90 to-black/90 flex items-center'>
            <div className='bg-yellow-200 p-4 h-fit w-[50vw] mx-auto rounded-xl '>
            <h1 className='text-3xl my-4 text-center'>Create an Account</h1>
            <form className='flex flex-col justify-center items-center' action="">
            <input className='w-[80%] p-2 rounded-xl my-2' type="text" placeholder='First Name' name="" id="" />
            <input className='w-[80%] p-2 rounded-xl my-2' type="text" placeholder='Last Name' name="" id="" />
            <input className='w-[80%] p-2 rounded-xl my-2' type="email" placeholder='Email' name="" id="" />
            <input className='w-[80%] p-2 rounded-xl my-2' type="password" placeholder='Password' name="" id="" />
            <input className='w-[80%] p-2 rounded-xl my-2' type="password" placeholder='Confirm Password' name="" id="" />
            <p className='my-3 w-[80%]'>By creating an account, I consent to the processing of my perosnal data in accordance with the PRIVACY POLICY</p>
            <button className='my-2 bg-white px-4 py-2 font-bold'>Create</button>
            <a href='' className='my-3'>Already have an account? <span className='text-blue-500 font-bold'>Login</span></a>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Register