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
  <div key={i} className="o-card bg-white p-3 select-none  h-[184px] rounded-sm">
    <Link href={`products/${value.name}`}>

      <div className="image  min-h-[75px] flex justify-center">
        <Image src={ value.img[0].url} alt='' width={300} height={0} />
     
      </div>

      <h3 className='mt-3 truncate '>{value.name}</h3>
      <span className='block text-sm'>{value.price}</span>
      <span className=' text-sm'>{value.stock / 100 * 1}% Sold</span>
      <div className="prograss-bar bg-[rgb(233,236,239)] h-2 ">
        <div style={{ width: `${value.stock / 100 * 1}%` }} className={`bg-[rgb(253,157,13)] h-full`} ></div>


      </div>
    </Link>
  </div>


)
})}



       </Slider>
    </>
  )
}
