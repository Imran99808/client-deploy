'use client'
// import OrderAmount from '@/app/Components/orderAmount'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { theme } from '@/app/context/AddContext'
import { useRouter } from 'next/navigation'
import OrderAmount from '@/app/Components/OrderAmount'
export default function Page() {
  
    
    const {address,setAdress,values,authorived}=useContext(theme);
  const router=useRouter();
useEffect(()=>{
  if(!authorived){
    router.replace('/cart')
  }

},[])

  
  // const handler=()=>{
  //   const url=address.name?'checkout/shipping-address/update-adress':'checkout/shipping-address/new-adress'
  //   router.push(url)
  // }
  return (
    <div className='mt-5 pb-20'>
    <div className="container">
        <div className=" border-b  border-[#cccbcb] pb-[25px]">
      <h1 className=' font-semibold'>  Shipping Adress</h1>
     
      <div className="p-4 mt-3 bg-[#fff] rounded-md flex gap-[10px] items-center" >
      {/* <Link href='checkout/shipping-address/new-adress'> */}
        <div className="icon  bg-[rgba(246,246,247,1)] w-[45px] h-[45px] flex items-center justify-center rounded-full ">
         
        <div className="back-boxm  w-[35px] h-[35px] bg-black text-md text-[#fff] flex justify-center items-center rounded-full text-2xl">
                     <ion-icon name="location-outline"></ion-icon>
                    </div>
        </div>
        {address.name? <div className="d  w-[80%] ">
        <Link href='checkout/shipping-address/new-adress'> 
          <h2 className=' font-bold'>{address.locationName}</h2>
          <h4 className=' text-[rgba(155,163,170,1)] truncate'>{address.address}</h4>
          </Link> 
        </div>
            :
        <div className="mt-3 text-center w-[70%]">
     <Link href='checkout/shipping-address/new-adress' className='text-cente text-[13px] text-red-400 border-b-2 border-red-600 font-normal '>add adress</Link>
      </div>
           }
           {/* </Link> */}
      </div>
    
      
      </div>
      <OrderAmount data={values} location={address}/>
      
    </div>
</div>
  )
}
