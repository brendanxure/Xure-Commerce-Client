import React from 'react'
import Announcement from '../Components/Announcement'
import Nav from '../Components/Nav'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
        <Nav />
        <Announcement />
        <Slider />
    </div>
  )
}

export default Home