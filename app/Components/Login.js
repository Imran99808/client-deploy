'use client'
import React, { useContext } from 'react'
import {fetch_data} from '@/app/lib/fetchdata'
import { post } from '@/app/lib/fetchdata'
import { theme } from '../context/AddContext';
import { useRouter } from 'next/navigation'
export default  function Login() {
  const {values}=useContext(theme);
  const router=useRouter();
   const handler=async()=>{
     console.log('emon')
    const url= await post('api/google/auth',{state:'https://client-deploy-20q1.onrender.com/',values});
    router.push(url.url)
   }
  return (
    <div onClick={handler} className='b h-full w-full rounded-full'>
      <ion-icon name="person-outline" size=''></ion-icon>
      </div>
  )
}
