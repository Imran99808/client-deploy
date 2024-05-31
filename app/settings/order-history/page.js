import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import p from '@/public/3.png'

export default function page() {
    return (
        <div className="mt-5 pb-20">

            <div className="container">
                <div className='bg-[#fff]  rounded-xl p-4 mb-3'>

                    <div className="flex items-centerr  pb-[12px] gap-4">
                        <Link href="#" className='w-[68px] h-[68px] flex items-center justify-center bg-[#f4f5f6] rounded-md '>
                            <Image src={p} alt='' width={40} height={40} />
                        </Link>
                        <div className="w-[70%]  p-detail">
                            <div className="  flex gap-4 justify-between items-center">
                                <h4 className='truncate'>
                                    Winnbang Chair
                                </h4>
                                <div>
                                    <h5 className='text-[rgba(25,135,84)] bg-[rgba(25,135,84,0.12)] pl-[8px] pr-[8px] pt-[4px] pb-[4px]'>Ongoing</h5>



                                </div>

                            </div>
                            <h5 className='text-[rgba(155,163,170,1)]'>Qty:1</h5>
                            {/* <Link href='/order-tracker' className=' text-red-500 text-[13px]'>Track Order</Link> */}

                        </div>


                    </div>

                    <div className="mt-1 pt-[12px]  flex justify-between border-t  border-[#cccbcb]">

                        <h4>Order <span className='font-bold'></span><span className='text-[rgba(155,163,170,1)]'>26 jan24</span></h4>
                        <h4>Dispatched</h4>



                    </div>



                </div>
            </div>
        </div>
    )
}
