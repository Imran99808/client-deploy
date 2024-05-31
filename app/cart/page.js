'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import p from '@/public/3.png'
import { theme } from '../context/AddContext'
import { loop } from '../lib/loop'
import { remove } from '../lib/fetchdata'
import Cart from '../Components/Cart'

import { post } from '../lib/fetchdata';

  
export default function Page() {

    const {values,setValue,authorived}=useContext(theme);

    const router=useRouter();

     const [toggole,settoggole]=useState(true);
    
       let totalPrice=0;
 
   
   
const render=()=>{
    settoggole(!toggole)
}

    
    
const removeArray=(id,color)=>{
    const arr=[];
    let j=0;
    for(let i=0;i<values.length;i++){
        
        if(values[i].id===id&&values[i].color===color){
            
            console.log(values[i].id===id)
            continue;
        }
        
       
        arr[j]=values[i]
        j+=1;
    }
    return arr;
}

const handler=async(id,color,junk)=>{
   
    // setTotalprice(totalamount-junk)
  setValue( removeArray(id,color))
        const data=await remove(`api/add-cards/:${id}`)

}




const button=async()=>{
console.log('dddddd')
if(values.length===0){
    return
}
if(authorived){
    router.push('cart/checkout')
}else{
    //  router.push("http://localhost:1337/api/google/auth")
       const url= await post('api/google/auth',{state:'http://localhost:3000/cart/checkout',values});
       router.push(url.url)

}

}




    return (
        
        <div className='mt-5 pb-20'>
            <div className="container ">
            {

loop(values,(value,i)=>{
  const price=value.discountPrice?value.discountPrice:value.price;
  totalPrice+=price*value.qty;
  

   return(
 <Cart key={value.id} value={value} render={render} handler={handler}/>

   )
})
}




</div>

            <div className="c bg-[#fff] fixed bottom-[60px] left-0 right-0">
                <div className="container flex justify-between pt-4 pb-4 items-center">
                    <div>
                        <h5 className='text-[rgba(155,163,170,1)]'>Totoal Price</h5>
                        <span>${totalPrice}</span>
                    </div>
                    {/* <Link href={{pathname:'cart/checkout',query:{values}}} className="btn  pointer-events-none  bg-[rgba(18,38,54,1)] text-[#fff] pt-2 pb-2 pl-4 pr-4 rounded-lg   ">Check Out</Link> */}

                    <button  className="btn   bg-[rgba(18,38,54,1)] text-[#fff] pt-2 pb-2 pl-4 pr-4 rounded-lg   " onClick={button}>Check Out</button>
                </div>
            </div>
        </div>
    )
}












