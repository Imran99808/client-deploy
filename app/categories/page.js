import React from 'react'

import Search from '../Components/Search'
import Image from 'next/image'
import c from '@/public/3.png'
import { loop } from '../lib/loop';
import { fetch_data } from '../lib/fetchdata';
import Link from 'next/link';
// import { cookies } from 'next/headers'

export default async function page() {
 

  const data=await fetch_data(`api/categories?populate=png`);
 
  return (
   
    <div className="container pb-20">

      <Search/>
      {data.data&&
      <ul className="mt-5 z-0 relative">
        
     {loop(data.data,(value,i)=>{
  
  
        
   return(
<>
 {value.name!="All"&&

    <li className=' mb-4 bg-[#fff] befor'>
          <Link href={'categories/'+value.name} className='flex justify-between items-center'>
           <div className="info pl-3">
            <h1>{value.name}</h1>
            <h5 className='text-[rgba(155,163,170,1)]'>{value.title}</h5>
            <span className='mt-5 block text-2xl '><ion-icon name="arrow-forward-outline"></ion-icon></span>
           </div>
           <div className="img z-10">
          
          <Image src={value.png.url} width={160} height={160} alt="" /> 
          {/* <Image src={process.env._APP_URL+value.attributes.png.data.attributes.url} width={160} height={160}/> */}
           </div>
          </Link>
        </li>
        }
        </>
   )

     })}

      </ul>
}
    </div>
  )
}
