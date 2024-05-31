'use client'
import React from 'react'
import { loop } from '../lib/loop'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Slide3({data}) {

  const settings={
    // dots:true,
    infinite:false,
    speed:500,
    slidesToShow:4,
    slidesToScroll:4,
    // variableWidth:true
  }
  return (
    <>
     <Slider {...settings}>
     <Link  href={'/products'} className='bg-white p-2 text-center block font-s font-semibold rounded-lg'><span>All</span></Link>
{loop(data.data,(value,i)=>{



return(
  <Link key={i} href={'/categories/'+value.name} className='bg-white p-2 text-center block font-s font-semibold rounded-lg'><span>{value.name}</span></Link>
)
})}
     
       
        
       </Slider>
    </>
  )
}


