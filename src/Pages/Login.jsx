import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../features/user/UserSlice'
import { serverUrl } from '../Utils/ServerUrl'

const Login = () => {
  const [loginForm, setLoginForm] = useState({})
  const dispatch = useDispatch()

  
  const onLogin = async(e) => {
    e.preventDefault()
    dispatch(loginStart())
    try {
      const response = await axios.post(`${serverUrl}/api/user/login`, loginForm)
      dispatch(loginSuccess(response.data)) 
    } catch (error) {
      console.log(error)
      dispatch(loginFailure())
    }
  }

  const onChange = (e)=> {
    setLoginForm((prev)=> ({...prev, [e.target.name]: e.target.value}))
  }
  return (
    <div className='h-screen w-full  bg-[url(https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)]'>
        <div className='h-full w-full bg-gradient-to-r from-black/90 to-black/90 flex items-center'>
            <div className='bg-yellow-200 p-4 h-fit w-[50vw] mx-auto rounded-xl '>
            <h1 className='text-3xl my-4 text-center'>Sign in</h1>
            <form className='flex flex-col justify-center items-center' action="" onSubmit={onLogin}>
            <input className='w-[80%] p-2 rounded-xl my-2' type="email" placeholder='Email' name="email" id="" onChange={onChange}/>
            <input className='w-[80%] p-2 rounded-xl my-2' type="password" placeholder='Password' name="password" id="" onChange={onChange}/>
            <button className='my-2 bg-white px-4 py-2 font-bold'>Login</button>
            <div className='flex justify-between w-[80%] my-3'>
                <a className='text-blue-500 font-bold' href=''>Forgot password</a>
                <a className='text-blue-500 font-bold' href=''>Create a new account</a>
            </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login