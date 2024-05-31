'use client'
import React from 'react'
import { loop } from '../lib/loop'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export default function ImageSlide({images}) {
console.log('alal')
  const settings={
    infinite:false,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    //  prevArrow:<PrevArrow/>,
    //  NextArrow:<NextArrow/>
  }
  return (
    <>
     <Slider {...settings}>
     {loop(images,(value,i)=>{
           console.log(value.url)     
           return(
            <div className=" w-full">
            <dir  className="  container h-[380px] " style={{backgroundImage:`url(${value.url})`,backgroundPositionX:'center',backgroundPositionY:'center',backgroundSize:'300px',backgroundRepeat:'no-repeat',zIndex:'0'}}>
        
          
      </dir>
      </div>
           )
       })}
       </Slider>
    </>
  )
}
