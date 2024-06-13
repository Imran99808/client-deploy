'use client'
import React from 'react'
import { loop } from '../lib/loop'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Slide2({data}) {

  const settings={
    // dots:true,
     infinite:false,
    speed:500,
    slidesToShow:3,
    slidesToScroll:3,
    gap:10
   
  }
  return (
    <>
     <Slider {...settings}>
     
     {loop(data.data, (value, i) => {

return (
 <div key={i} className=" bg-whit  p- select-none   rounded-md">
    <Link href={`products/${value.name}`}>

      <div className="image   flex justify-center">
        <Image src={value.img[0].url} alt='' width={400} height={400} />
     
      </div>
      <h4 className='mt-1 truncate text-center '>{value.name}</h4>
      <span className='block text-sm text-center'>{value.price}</span>
    
    </Link>
  </div>


)
})}



       </Slider>
    </>
  )
}
