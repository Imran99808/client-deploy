'use client'
import React from 'react'
// import {Dink} from '@/app/lib/Link'
import Link from 'next/link'
import { IonIcon } from '@ionic/react'

//  import {IonIcon} from '@ionic/react'
import { logoIonic, heartOutline, homeOutline, gridOutline, bagOutline, settingsOutline } from 'ionicons/icons'
export default function Footer() {
  const c = '/categories'
  return (
    <div className=' nav bg-[#fff] fixed bottom-0 right-0 left-0'>
      <div className=" container    z-50 ">
        <ul className='h-full flex justify-between items-center p-3 items'>
          <li className='text-3xl   font-normal'><Link href="/" replace>
            {/* <ion-icon  name="home-outline" ></ion-icon> */}
            <IonIcon icon={homeOutline} />
          </Link></li>
          <li className='text-3xl   '><Link href={c} >
            <IonIcon icon={gridOutline} /></Link></li>
          <li className='text-3xl relative   '>
          
            <span className=' absolute top-[-5px] left-5    bg-red-600 text-xs  pl-1 pe-1 rounded-full text-[#fff]'>10</span>
            <Link
              href={{
                pathname: "/cart",

              }}>
              {/* <ion-icon name="bag-outline"></ion-icon> */}
              <IonIcon icon={bagOutline} />
            </Link>
          
         
            </li>
          <li className='text-3xl   '><Link href="/wishlist">
            {/* <ion-icon name="heart-outline"></ion-icon> */}
            <IonIcon icon={heartOutline} />
          </Link></li>
          <li className=' text-3xl ]  '><Link href="/settings">
            {/* <ion-icon name="settings-outline"></ion-icon> */}
            <IonIcon icon={settingsOutline} />

          </Link></li>



        </ul>
      </div>
    </div>
  )
}
