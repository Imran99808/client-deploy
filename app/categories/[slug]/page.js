import Categories from '@/app/Components/Categories'
import { cookies } from 'next/headers'
import React from 'react'
import p1 from '@/public/11.png'
import { fetch_data } from '../../lib/fetchdata'
import ProductCard from '@/app/Components/ProductCard';
import Search from '@/app/Components/Search';
import InfintScroll from '@/app/Components/InfintScroll'




export async function generateMetadata({params}){
  let token;
  try{

     token=cookies().get('jwt').value;
  }catch{
    token=null
  }

    const {slug}=params;
    const path=`api/categorie?filters[name]=${slug}&populate[products][populate]=*&populate[png]=*`
     const data=await fetch_data(path+`&populate[products][start]=${0}&populate[products][limit]=${6}`,token,true);
    
  
   return{
    title:data.data.title,
    description:data.data.description,
    openGraph:{
      images:[{
        url:data.data.png.url,
        width:data.data.png.width,
        height:data.data.png.height, 
      }]
    }
   }
}














export default async function page({params}) {
  let token;
  try{

     token=cookies().get('jwt').value;
  }catch{
    token=null
  }

    const {slug}=params;

    const path=`api/categorie?filters[name]=${slug}&populate[products][populate]=*&populate[png]=*`
     const data=await fetch_data(path+`&populate[products][start]=${0}&populate[products][limit]=${6}`,token,true);
    
    
    
  return (
  
    <div className="container pb-20">
    {/* <Categories/> */}
    <Search/>

    {
    data.data.products[0]!=undefined&&
     
    <div className="mt-5  relative pb-[40px] grid grid-cols-2  gap-2">

<ProductCard data={data.data.products}/>
<InfintScroll path={path}  limit={6} name={slug} populate={true}/>
</div>

     
     
     } 

   </div>
  )
}

