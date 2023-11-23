import { Api } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProduct, resetCart } from '../features/cart/CartSlice'
import { accessToken } from '../Utils/RequestMethod'
import { serverUrl } from '../Utils/ServerUrl'
import { userId } from '../Utils/RequestMethod'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const orderedProducts = useSelector(allProduct)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)

  // useEffect(()=> {
  //   const postOrder = async()=> {
  //    try {
  //     // const headers = {
  //     //   Authorization : `Bearer ${accessToken}`
  //     // }
  //     const response = await axios.post(`${serverUrl}/api/order`, {...orderedProducts, userId })
  //     if(response.data){
  //       setSuccess(true)
  //       console.log(response.data)
  //       dispatch(resetCart())
  //     }
  //    } catch (error) {
  //      console.log(error)
  //    } finally {
  //      setSuccess(false)
  //      navigate('/')
  //    }
  //   } 
  //   postOrder()
  // }, [])

  return (
    <div>{success ? 'Order Placed Successfully' : '....Please wait'}</div>
  )
}

export default Success