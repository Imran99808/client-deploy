import React from 'react'

import { loop } from '../lib/loop';
import { fetch_data } from '../lib/fetchdata';
import Link from 'next/link';
import Slide3 from './Slide3';

export default async function Categories() {

  const data=await fetch_data("api/categories");
  
    const settings={
          
        display: true,
        iShow:4,
         media:true,
        // circle:true,
        gap:9,
        // stricky:true
    }
  return (
    <div className='categories mt-5 '>
      {data.data&&
         <Slide3 data={data}/>
}   
    </div>
  )
}
