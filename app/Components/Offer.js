import Image from 'next/image'
import React from 'react'
import l from '@/public/13.png'

import { fetch_data } from '../lib/fetchdata'
import { loop } from '../lib/loop';
import Link from 'next/link'
import Slide2 from './Slide2';

export default async  function Offer() {

  const data = await fetch_data(`api/offer-zones?populate[products][start]=${0}&populate[products][limit]=${20}&populate[products][populate]=*`);


  const settings = {

  

  }

  return (
    <>
      {data.data &&
        <div className='mt-5'>
          <div className="flex justify-between">
            <span className=' font-bold'>Offer Zone</span>
            <Link href="offer-zones" className='font-medium  text-[rgba(155,163,170,1)] text-sm'>view All</Link>
          </div>
          <div className="offer mt-5 ">
          

            <Slide2 data={data}/>
          </div>
        </div>
      }
    </>
  )
}





































// <div className="bg-white p-3">
// <a href="#">
//     <Image src={l}/>

//     <h3 className='mt-3 '>Blac - Table Lamp</h3>
//     <span className='block text-sm'>$14</span>
//     <span className=' text-sm'>33% Sold</span>
//     <div className="prograss-bar bg-[rgb(233,236,239)] h-2">
// <div className="bg-[rgb(253,157,13)] w-[33%] h-full" ></div>
//     </div>
// </a>
// </div>

// <div className="bg-white p-3">
// <a href="#">
//     <Image src={l}/>

//     <h3 className='mt-3 '>Blac - Table Lamp</h3>
//     <span className='block text-sm'>$14</span>
//     <span className=' text-sm'>33% Sold</span>
//     <div className="prograss-bar bg-[rgb(233,236,239)] h-2">
// <div className="bg-[rgb(253,157,13)] w-[33%] h-full" ></div>
//     </div>
// </a>
// </div>



//  <div className="bg-white p-3">
// <a href="#">
//     <Image src={l}/>

//     <h3 className='mt-3 '>Blac - Table Lamp</h3>
//     <span className='block text-sm'>$14</span>
//     <span className=' text-sm'>33% Sold</span>
//     <div className="prograss-bar bg-[rgb(233,236,239)] h-2">
// <div className="bg-[rgb(253,157,13)] w-[33%] h-full" ></div>
//     </div>
// </a>
// </div>



// <div className="bg-white p-3">
// <a href="#">
//     <Image src={l}/>

//     <h3 className='mt-3 '>Blac - Table Lamp</h3>
//     <span className='block text-sm'>$14</span>
//     <span className=' text-sm'>33% Sold</span>
//     <div className="prograss-bar bg-[rgb(233,236,239)] h-2">
// <div className="bg-[rgb(253,157,13)] w-[33%] h-full" ></div>
//     </div>
// </a>
// </div>