import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Newsletter from '../Components/Newsletter'
import ProdListFilter from '../Components/ProdListFilter'
import Product from '../Components/Product'

const ProductList = () => {
  return (
    <div>
        <Nav />
        <Announcement />
        <ProdListFilter />
        <Product />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList