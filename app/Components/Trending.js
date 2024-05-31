import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { fetch_data } from '../lib/fetchdata'
import { loop } from '../lib/loop';


import p from '@/public/3.png'
import AddCard from './AddCard';

export default async function Trending() {
  const data = await fetch_data(`api/trending-products?populate[products][start]=${0}&populate[products][limit]=${3}&populate[products][populate]=*`);
  // console.log('.................................',data.data)
  return (
    <>
      {data.data &&
        <div className="mt-5">
          <div className="flex justify-between">
            <span className=' font-bold'>Trending Products</span>
            <Link href="trending-products" className='font-medium  text-[rgba(155,163,170,1)] text-sm'>view All</Link>
          </div>
          <div className="mt-5 flex flex-col gap-2">

            {loop(data.data, (value, i) => {

              const star = value.reviewCount ? value.star / value.reviewCount : 0
              return (



                <div className='   h-[110px] relative bg-[#fff] rounded-xl p-4'>

                  <div className="flex  h-full  gap-4">
                    <Link href={`products/${value.name}`} className=' '>
                      <Image src={ value.img[0].url} alt='' width={60} height={60} />
                      {/* <div className=" w-[60px] h-[60px] ">
                <Image src={process.env._APP_URL+value.img[0].url}   />
                </div> */}
                    </Link>
                    <div className=" w-4/5 p-details">
                      <div className="  flex justify-between">
                        <Link href={`products/${value.name}`}>
                          <h4 className='truncate'>
                            {value.name}
                          </h4>
                        </Link>
                        <div>
                          <i className="fa-regular text-xs fa-star" aria-hidden="true"></i>
                          <span>{star.toFixed(2)}</span>
                        </div>

                      </div>
                      <h5 className='mt-1 text-[rgba(155,163,170,1)]'>{value.title}</h5>
                      <div className="mt-1 flex justify-between font-bold">
                        <h5>{value.price}</h5>
                        {/* <a className='  rounded-full bg-b text-[#fff] w-7 h-7 flex justify-center items-center' ><i className="fa-solid fa-plus"></i></a> */}

                      </div>

                    </div>

                  </div>

                  <div className=" absolute right-0 bottom-0 "><AddCard key={i} data={value} /></div>
                </div>





              )
            })}









          </div>
        </div>
      }</>
  )
}
