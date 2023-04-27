import React from 'react'
import Announcement from '../Components/Announcement'
import Catergories from '../Components/Catergories'
import Nav from '../Components/Nav'
import Newsletter from '../Components/Newsletter'
import Product from '../Components/Product'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
        <Nav />
        <Announcement />
        <Slider />
        <Catergories />
        <Product />
        <Newsletter />
    </div>
  )
}

export default Home