'use client'
import React, { useState } from 'react'
import QtyButton from './QtyButton'
import Link from 'next/link'
import Image from 'next/image';

export default function Cart({ value, handler, render }) {

  const price = value.discountPrice ? value.discountPrice : value.price;
  const returnQty = (v, plus) => {
    render();
    value.qty = v;

  }
  return (

    <div className='  bg-[#fff] rounded-xl p-4 mb-3'>
      <Link href={`/products/${value.name}`}>
        <div className="flex items-centerr gap-4">
          <div href="#" className='w-[88px] h-[88px]  flex items-center justify-center bg-[#f4f5f6] rounded-md '>
            <Image src={ value.img[0].url} alt='3' width={60} height={60} />
            
          </div>
          <div className=" w-[70%]  p-detail">
            <div className="  flex gap-4 justify-between">
              <h4 className='truncate'>
                {value.name}
              </h4>
              <div onClick={(e) => {
                e.preventDefault()
                handler(value.id, value.color)
              }}>



                remove

              </div>

            </div>
            <div className="flex items-center gap-4">
              <h5 className='mt-1 text-[rgba(155,163,170,1)]'>Qty:{value.qty}</h5>
              <span>||</span>
              <span style={{ backgroundColor: value.color.color }} className={` flex justify-center items-center  text-[#fff] text-[13px] w-4 h-4  rounded-full  `} >
              </span>
            </div>

            <div className="mt-1  flex justify-between font-bold">

              <h4 className='mt-1'>${price * value.qty}</h4>
              <QtyButton returnQty={returnQty} singleQty={value.qty} />

            </div>
          </div>

        </div>
      </Link>
    </div>
  )
}
