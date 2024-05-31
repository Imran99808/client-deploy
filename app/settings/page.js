'use client'
import React from 'react'
import Link from 'next/link'
import { IonIcon } from '@ionic/react'
import { alertOutline, earOutline, heartOutline, layersOutline, locationOutline } from 'ionicons/icons'

export default function page() {
  return (
    <div className='mt-5 pb-20'>
        <div className="container">
            <div className=''>
                <li className='pt-[15px] pb-[15px] border-b  border-[#cccbcb] block'>
                <Link href="settings/order-history" className='flex gap-4'>
                    
                     <div className="back-box  text-2xl">
                     
                     <IonIcon icon={layersOutline}/>
                    </div>
                    <div className='w-[70%] '>
                        <h3>Orders</h3>
                        <h4 className='text-[rgba(155,163,170,1)] truncate'>Ongoing orders,Recent orders </h4>
                    </div>
                    
                    </Link >
                </li>

                <li className='pt-[15px] pb-[15px] border-b  border-[#cccbcb] block'>
                <Link href="wishlist" className='flex gap-4'>
                    
                     <div className="back-box  text-2xl">
                   
                     <IonIcon icon={heartOutline}/>
                    </div>
                    <div className='w-[70%] '>
                        <h3>Whishlist</h3>
                        <h4 className='text-[rgba(155,163,170,1)] truncate'>Your sve product </h4>
                    </div>
                    
                    </Link >
                </li>


                <li className='pt-[15px] pb-[15px] border-b  border-[#cccbcb] block'>
                <Link href='settings/saved-adress' className='flex gap-4'>
                    
                     <div className="back-box  text-2xl">
                   
                     <IonIcon icon={locationOutline}/>
                    </div>
                    <div className='w-[70%] '>
                        <h3>Saved Adress</h3>
                        <h4 className='text-[rgba(155,163,170,1)] truncate'>Home & Office</h4>
                    </div>
                    
                    </Link >
                </li>


                <li className='pt-[15px] pb-[15px] border-b  border-[#cccbcb] block'>
                <Link href="settings/terms-conditions" className='flex gap-4'>
                    
                     <div className="back-box  text-2xl">
                    
                     <IonIcon icon={alertOutline}/>
                    </div>
                    <div className='w-[70%] '>
                        <h3>Terms & Conditions</h3>
                        <h4 className='text-[rgba(155,163,170,1)] truncate'>T&c for use platfrom</h4>
                    </div>
                    
                    </Link >
                </li>


                <li className='pt-[15px] pb-[15px] border-b  border-[#cccbcb] block'>
                <Link href="settings/help" className='flex gap-4'>
                    
                     <div className="back-box  text-2xl">
                     <IonIcon icon={earOutline}/>
                    </div>
                    <div className='w-[70%] '>
                        <h3>Help</h3>
                        <h4 className='text-[rgba(155,163,170,1)] truncate'>Customer support </h4>
                    </div>
                    
                    </Link >
                </li>


               </div>
               </div>
               </div>
  )
}