import React from 'react'
import { cookies } from 'next/headers'
import { fetch_data } from '../lib/fetchdata'
import ProductCard from './ProductCard';
import Link from 'next/link';

export default async function PdetailsProducts({name}) {
  let token;
  try{

     token=cookies().get('jwt').value;
  }catch{
    token=null
  }

  
     const data=await fetch_data( `api/categorie?filters[name]=${name}&populate[products][start]=${0}&populate[products][limit]=${10}&populate[products][populate]=*`,token);
   
       
  return (
    <div className="pt-5">
       
       <div className="flex justify-between">
         <span className=' font-bold'>Releted Product</span>
         <Link href={"/categories/"+name} className='font-medium  text-[rgba(155,163,170,1)] text-sm'>view All</Link>
       </div>
 
       


       
       <div className="mt-5  relative pb-[40px] grid grid-cols-2  gap-2">
       {data.data.products[0]!=undefined&& <ProductCard data={data.data.products} /> }
 
 
 
 

       
 </div> 
 
    
   
     </div> 

  )
}
