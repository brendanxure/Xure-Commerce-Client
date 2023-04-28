import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Newsletter from '../Components/Newsletter'
import SingleProduct from '../Components/SingleProduct'

const ProductPage = () => {
  return (
    <div>
       <Nav />
       <Announcement />
       <SingleProduct />
       <Newsletter />
       <Footer />
    </div>
  )
}

export default ProductPage