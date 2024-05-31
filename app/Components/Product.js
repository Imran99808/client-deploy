
import React from 'react'
import { cookies } from 'next/headers'

import Image from 'next/image'
import p1 from '@/public/11.png'
import { fetch_data } from '../lib/fetchdata'

import ProductCard from './ProductCard';
import Link from 'next/link';
import InfintScroll from './InfintScroll'
import Wishbutton from './Wishbutton.1'


export default async function Product() {
  
 
  let token;
  try{

     token=cookies().get('jwt').value;
  }catch{
    token=null
  }
 
  const path=`api/products?populate=*`;
  const data=await fetch_data(path+`&start=${0}&limit=${4}`,token);

  return (
    <>
    {data.data&&
    <div className="pt-5">
       
      <div className="flex justify-between">
        <span className=' font-bold'>New Arrivals</span>
        <Link href="products" className='font-medium  text-[rgba(155,163,170,1)] text-sm'>view All</Link>
      </div>



      <div className="mt-5  relative pb-[40px] grid grid-cols-2  gap-2">

      <ProductCard data={data.data}/>
      <InfintScroll key={0} path={path} name='products'  limit={4}/> 

      </div>
      

    </div>
}</>
  )
}
















// <div className='bg-white rounded-xl '>
// <div className=' p-4 relative '>
//   <span className=' absolute   bg-b text-xs  pl-1 pe-1 rounded-full text-[#fff]'>new</span>
//   <span className=' absolute right-3'><i class="fa-regular fa-heart"></i></span>
//   <a href="#">
//     <Image src={p1} />
//     <span>Beach Cap</span>

//   </a>

//   <p className='mt-2'>
//     $12
//   </p>
//   <div>
//     <i class="fa-regular text-xs fa-star"></i>
//     <i class="fa-regular text-xs fa-star"></i>
//     <i class="fa-regular text-xs fa-star"></i>
//     <i class="fa-regular text-xs fa-star"></i>
//     <i class="fa-regular text-xs fa-star"></i>
//   </div>
//   <a className=' absolute right-4 bottom-4 rounded-full bg-b  text-[#fff] w-7 h-7 flex justify-center items-center' ><i class="fa-solid fa-plus"></i></a>
//   <div></div>

// </div>
// </div>










