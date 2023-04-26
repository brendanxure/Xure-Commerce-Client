import React, { useState } from 'react'
import { sliderItems } from '../Data'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Slider = () => {
    const [details, setDetails] = useState(sliderItems)
    const [slideNum, setSlideNum] = useState(0)

    const slideleft = () => {
        const slider = document.getElementById('slider')
        // setSlideNum(slideNum > 0 ? slideNum - 1 : 2)
        // slider.style.transform = `translateX(${slideNum * -1000}px)`
        // slider.style.transition=`all 0.5s`
        slider.scrollLeft = slider.scrollLeft - 1400
    }
    const slideright = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 1400
    }

  return (
    <div>
        <MdChevronLeft onClick={slideleft} size={40} className='block bg-white rounded-full left-2 top-[50%] absolute z-10 opacity-50 hover:opacity-100 cursor-pointer text-black'/>
        <div id='slider' className='flex overflow-x-scroll scrollbar-hide scroll-smooth '>
        {details.map((detail, id)=>
            <div className='flex min-w-full justify-center mx-auto h-[80vh] items-center'>
                <img className='md:basis-1/2 hidden md:block py-4' src={detail.img}/>
                <div className='md:basis-1/2 flex items-center justify-center text-center md:text-left md:items-start flex-col '>
                    <h1 className='text-5xl md:text-7xl font-bold my-8'>{detail.title}</h1>
                    <h2 className='text-3xl my-6 max-w-[90%]'>{detail.desc}</h2>
                    <p className='outline outline-gray-500 outline-2 cursor-pointer max-w-[120px] flex justify-center items-center p-2'>SHOP NOW</p>
                </div>
            </div>
        )}
    </div>
    <MdChevronRight onClick={slideright} size={40} className='block bg-white rounded-full absolute right-2 top-[50%] z-10 opacity-50 hover:opacity-100 cursor-pointer text-black'/>
    </div>
  )
}

export default Slider