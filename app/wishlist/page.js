'use client'
import React, { useEffect, useState } from 'react'
// import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

import p from '@/public/3.png'
import { post } from '../lib/fetchdata'
import { loop } from '../lib/loop'
import { getData } from '../context/AddContext'
import Wishbutton from '../Components/Wishbutton.1'
import AddCard from '../Components/AddCard'


export default function Page() {
  const [data, setData] = useState();


  useEffect(() => {
    getData('api/wish-lists').then(data => {
      data.data = data.data ? data.data : {};
      setData(data.data)
    })

  }, [])


  const cb = (id) => {
    const arr = [];
    for (let i = 0; i < data.length; i++) {

      if (id === data[i].id) {
        continue;
      }

      arr.push(data[i]);

    }



    setData(arr);



  }


  return (
    <div className=" mt-5 pb-20">

      <div className="container">

        {data && loop(data, (value, i) => {
          const price = value.discountPrice ? value.discountPrice : value.price;
          return (

            <div className='  bg-[#fff] rounded-xl p-4 mb-3'>
  <Link href={`/products/${value.name}`} >
              <div className="flex items-centerr gap-4">
                <div className='w-[88px] h-[88px] flex items-center justify-center bg-[#f4f5f6] rounded-md '>
                  <Image src={ value.img[0].url} alt='' width={60} height={60} />
                  </div>
                <div className=" w-[70%]  p-detail">
                  <div className="  flex gap-4 justify-between">
                    <h4 className='truncate'>
                      {value.name}
                    </h4>


                    <Wishbutton key={i} productData={value} remove={true} cb={cb} />



                  </div>
                  <h5 className='mt-1 text-[rgba(155,163,170,1)]'>Qty:1</h5>
                  <div className="mt-1  flex justify-between font-bold">

                    <h4 className='mt-1'>{price}</h4>
                    <a className='  rounded-full bg-[rgba(18,38,54,1)] text-[#fff] w-6 h-6 text-lg flex justify-center items-center' ><ion-icon name="add-outline" ></ion-icon></a>
                    {/* <AddCard key={i} data={value}/> */}
                  </div>
                </div>
                
              </div>
              </Link>
            </div>

          )
        })}




      </div>
    </div>
  )
}
