import React from 'react'
import Link from 'next/link'
// import OrderAmount from '../Components/orderAmount'

export default function page() {
  return (
    <div className="mt-5  pb-20 ">
   <div className="container">
   
    <h4 className='text-[rgba(155,163,170,1)]'>01 Dec, 2023</h4>
    <div className="flex justify-between items-center mt-1 pb-[20px] border-b  border-[#cccbcb]">
      <h4>Order Id : #1234556600</h4>
      <h4><span className='text-[rgba(155,163,170,1)]'>Amount :</span>$112</h4>
    </div>
   

   <div className="p-[20px] mt-[25px] bg-[#fff] rounded-md">
    <h1 className='mb-3'>Order Journey</h1>
    <ul>
      <li className=''>
        <div className="flex gap-3">
          <div className='relative before w-[40px] h-[40px] bg-[rgba(244,245,246)] text-xl flex items-center justify-center rounded-full'> 
          {/* <ion-icon name="layers-outline"></ion-icon> */}
          {/* <ion-icon name="checkmark-circle"></ion-icon> */}
          <span className='flex items-center justify-center text-4xl'><ion-icon name="checkmark-circle"></ion-icon></span>
          </div>
          <div className=""><h2>Order Information Received</h2>
          
          <h4 className='text-[rgba(155,163,170,1)]'>5:30 pm | #5 Nov, 2024</h4>
          </div>
        </div>
      </li>

      <li className='mt-[30px]'>
        <div className="flex gap-3">
          <span className='relative before w-[40px] h-[40px] bg-[rgba(244,245,246)] text-xl flex items-center justify-center rounded-full'> <ion-icon name="layers-outline"></ion-icon></span>
          <div className=""><h2>Order Information Received</h2>
          
          <h4 className='text-[rgba(155,163,170,1)]'>5:30 pm | #5 Nov, 2024</h4>
          </div>
        </div>
      </li>

      <li className='mt-[30px]'>
        <div className="flex gap-3">
          <span className='relative before w-[40px] h-[40px] bg-[rgba(244,245,246)] text-xl flex items-center justify-center rounded-full'> <ion-icon name="layers-outline"></ion-icon></span>
          <div className=""><h2>Order Information Received</h2>
          
          <h4 className='text-[rgba(155,163,170,1)]'>5:30 pm | #5 Nov, 2024</h4>
          </div>
        </div>
      </li>
      <li className='mt-[30px]'>
        <div className="flex gap-3">
          <span className='relative before w-[40px] h-[40px] bg-[rgba(244,245,246)] text-xl flex items-center justify-center rounded-full'> <ion-icon name="layers-outline"></ion-icon></span>
          <div className=""><h2>Order Information Received</h2>
          
          <h4 className='text-[rgba(155,163,170,1)]'>5:30 pm | #5 Nov, 2024</h4>
          </div>
        </div>
      </li>
      <li className='mt-[30px]'>
        <div className="flex gap-3">
          <span className=' w-[40px] h-[40px] bg-[rgba(244,245,246)] text-xl flex items-center justify-center rounded-full'> <ion-icon name="layers-outline"></ion-icon></span>
          <div className=""><h2>Order Information Received</h2>
          
          <h4 className='text-[rgba(155,163,170,1)]'>5:30 pm | #5 Nov, 2024</h4>
          </div>
        </div>
      </li>
    </ul>
   </div>




{/* <OrderAmount/> */}

{/* 
   <div className="bg-[#fff] mt-[25px] p-[15px]   rounded-md">
<div className="flex items-center justify-between">
  <h4 className='text-[rgba(155,163,170,1)]'>Sub Total</h4>
  <h3>$112</h3>

</div>
<div className="flex items-center justify-between mt-3">
  <h4 className='text-[rgba(155,163,170,1)]'>Shipping charge</h4>
  <h3>$20.00</h3>

</div>

<div className="flex items-center justify-between mt-3">
  <h4 className='text-[rgba(155,163,170,1)]'>Discount(10%)</h4>
  <h3>$0.00</h3>

</div>

<div className="flex items-center justify-between mt-3 pt-3 border-t  border-[#cccbcb]">
  <h4 className='text-[rgba(155,163,170,1)]'>Grand Total</h4>
  <h3>$132</h3>

</div>


   </div> */}
   <Link href="order-history" className='mt-[25px] bg-[rgba(18,38,54,1)] text-[#fff] block text-center p-2 rounded-lg'>Continue Shopping</Link>
   </div>
   </div>
  )
}
