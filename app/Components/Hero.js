import React from 'react'

import b1 from '@/public/banner-1.jpg'

import {fetch_data} from '@/app/lib/fetchdata'

import Slide from './Slide'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'


export default async function Hero() {
  
  const data=await fetch_data("api/hero-sections?populate=*");


 
  return (
    <>
    {data.data&&
    <div className='hero mt-5 '>
        {/* <Move {...settings}> */}
     <Slide data={data}/>
        {/* </Move> */}
    </div>
      }
      </>
  )
}
