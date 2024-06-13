'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { loop } from '../lib/loop'
import Image from 'next/image'
import AddCard from './AddCard'
import Wishbutton from './Wishbutton.1'
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

export default function Card({value}) {
  
    const[check,setCheck]=useState('0');
  const handler=(e)=>{
        e.preventDefault();
    setCheck( e.target.getAttribute('value'));
 }
  return (
    <div className="   card relative z-1 hover:z-[2]">
    <Link href={`/products/${value.name}`} className='  pl-[10px] pr-[10px] pb-[10px] block  hover:l-hover'>
    <div className="relative imgContainer ">
      <div className="imag flex items-center justify-center  w-full bg-[rgb(210,215,219)   rounded-md">
    
    <Image src={value.img[`${check}`].url} alt='' width={300} height={100}/>
    </div>
    <div className="color border-t-2 border-b-2 hidden ">
  

{loop(value.color,(value,i)=>{

                        return(
                            <div style={{backgroundColor:value.color}} key={i} value={i} className={` flex justify-center items-center ${check===`${i}`&&'ring-offset-2 ring-2'} text-[#fff] text-[13px] w-3 h-3  rounded-full  `} onClick={handler}>
                           
                            </div> 
                        )
                    })}
                        
                        

                           </div>                  
    </div>
    
    <h1 class=" name truncate text-center">{value.name}</h1>
    <p className='mt-1  text-[1.25rem] text-center font-medium text-[#020310]'>
      {value.discountPrice?value.discountPrice:value.price}

      <span className=' ml-[0.25rem] text-[#747794]  text-[0.875rem] line-through'>{value.discountPrice&&value.price}</span>
      </p>

      <div class=" p-info text-center hidden">
      <h4 class="text-[12px]   overflow-hidden  h-[80px] text-[rgba(155,163,170,1)]">

{value.descripetion}
</h4>
            
            <div className="mt-2  flex justify-center items-center  text-center gap-2 mb-2">
             <span className=' flex items-center  text-xl'>  <Wishbutton  productData={value}/> </span>
            <span className='border-l-2 border-r-2 p-1   text-xl'>  <AddCard colorindex={check} card={true} data={value}/>  </span>
            <div className="text-xl flex items-center"><IonIcon icon={searchOutline}/></div> 
           

            </div>
            </div>
    </Link>
    </div>
   
  )
}
