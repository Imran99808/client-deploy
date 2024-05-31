import React from 'react'
import { cookies } from 'next/headers';
import { fetch_data } from '@/app/lib/fetchdata'
import ProductCard from '@/app/Components/ProductCard';
import Search from '@/app/Components/Search';
import { loop } from '../lib/loop';
import OrderAmount from '../Components/OrderAmount';
import InfintScroll from '../Components/InfintScroll';

export default async function page({params}) {
  
  let token;
  try{

     token=cookies().get('jwt').value;
  }catch{
    token=null
  }
    const {slug}=params;
    const path=slug==='products'?`api/products?populate=*`: `api/${slug}?populate[products][populate]=*`
     const url=slug==='products'?`api/products?populate=*&start=${0}&limit=${6}`:
     `api/${slug}?populate[products][start]=${0}&populate[products][limit]=${6}&populate[products][populate]=*`
    //  `api/${slug}?populate=products.img&populate=products.color&populate=products.wish_lists`;


    
    const data=await fetch_data(url,token);
    console.log('o',data)
    if(data.data===null){
    return  OrderAmount();
    }

    //  const data2=slug==='products'?data:data.data[0].attributes.products;
    // console.log(data.data)
  return (
   
    <div className="container pb-20">
     {/* <Categories/> */}
     <Search/>

     { data.data[0]!=undefined&&

<div className="mt-5  relative pb-[40px] grid grid-cols-2  gap-2">

<ProductCard data={data.data}/>
<InfintScroll path={path}  limit={6} name={slug+'view'} populate={slug!=='products'}/>
</div>

   
     } 

    </div>
  )
}
