'use client'
import React from 'react'
import { loop } from '../lib/loop'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Slide({data}) {

  const settings={
    dots:true,
    // infinity:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    appendDots:(dots)=>{
      return <ul style={{margin:'0px'}}>{dots}</ul>
    }
  }
  return (
    <>
     <Slider {...settings}>
     {loop(data.data,(value,i)=>{
                
           return(
            <div className=' ' key={i}><Link href="#">
              {/* <Image src={b1} width={600} height={100}  className='img h-full rounded-lg '/> */}
              <Image src={value.attributes.banner.data.attributes.url}  className='img h-full rounded-lg' alt="" width={1000} height={1000}/>
              </Link>
              </div>
           )
       })}
       </Slider>
    </>
  )
}
