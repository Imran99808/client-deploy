import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='mt-5 pb-20'>
    <div className="container">
        <ul className='adress-list'>
            <li className='pb-[20px]'>
                <div className="shippng-adress bg-[#fff] p-[15px] nav rounded-md">
                    <div className="flex justify-between items-center">
                        <div className="check flex justify-center items-center gap-2">
                            <input type="checkbox" className='rounded-full w-4 h-4 b-a appearance-none' id='r1'/>
                            <label htmlFor="r1" className='text-[14px] font-semibold'>Home</label>
                        </div>

                        <div className="flex gap-2 items-center justify-between">
                            <a href="#" className='flex items-center justify-center border  border-[rgba(18,38,54,.7)] p-[5px] text-lg rounded-md'>  <ion-icon name="layers-outline"></ion-icon></a>
                            <a href="#" className='flex items-center justify-center border  border-[rgba(18,38,54,.7)] p-[5px] text-lg rounded-md'>  <ion-icon name="layers-outline"></ion-icon></a>
                        </div>


                    </div>
                    <div className="a-details mt-[5px] pl-[25px]">
                    <p className='text-[rgba(18,38,54)] text-[13px] '>3501 Maloy Court, East Emhurst, New York City, NY 11369</p>
                    <h4 className='mt-1'>Phone no : <span className='text-[13px] text-[rgba(155,163,170,1)] '>01643488766</span></h4>
                    </div>
                </div>
            </li>



            <li className='pb-[20px]'>
                <div className="shippng-adress bg-[#fff] p-[15px] nav rounded-md">
                    <div className="flex justify-between items-center">
                        <div className="check flex justify-center items-center gap-2">
                            <input type="checkbox" className='rounded-full w-4 h-4 b-a appearance-none' id='r1'/>
                            <label htmlFor="r1" className='text-[14px] font-semibold'>Office</label>
                        </div>

                        <div className="flex gap-2 items-center justify-between">
                            <a href="#" className='flex items-center justify-center border  border-[rgba(18,38,54,.7)] p-[5px] text-lg rounded-md'>  <ion-icon name="layers-outline"></ion-icon></a>
                            <a href="#" className='flex items-center justify-center border  border-[rgba(18,38,54,.7)] p-[5px] text-lg rounded-md'>  <ion-icon name="layers-outline"></ion-icon></a>
                        </div>


                    </div>
                    <div className="a-details mt-[5px] pl-[25px]">
                    <p className='text-[rgba(18,38,54)] text-[13px] '>3501 Maloy Court, East Emhurst, New York City, NY 11369</p>
                    <h4 className='mt-1'>Phone no : <span className='text-[13px] text-[rgba(155,163,170,1)] '>01643488766</span></h4>
                    </div>
                </div>
            </li>





        </ul>

        <Link href={'shipping-address/new-adress'} className='bg-[#fff] rounded-md block text-center text-[rgba(155,163,170,1)] p-2'>+ Add New Address</Link>

          <div className=" fixed bottom-[80px]   left-0 right-0 text-center">
        <button className="btn cal bg-[rgba(18,38,54,1)] text-[#fff]  pt-2 pb-2 pl-4 pr-4 rounded-lg   ">Apply</button>
        </div>
    </div>
</div>
  )
}
