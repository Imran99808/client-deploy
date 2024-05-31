'use client'
import React, { useEffect, useState } from 'react'

import { getData } from '../context/AddContext';
import Link from 'next/link';
import { loop } from '../lib/loop';
import Image from 'next/image';
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

export default function Search() {
  const[search,setSearch]=useState('');
  const[data,setData]=useState([])
  let sdata=[];


  useEffect(()=>{
  

if(search!==''){
    getData(`api/search?name=${search}&populate=*`).then(sdata=>{
      // data.data=data.data?data.data:{};
      //  console.log(data[0].item.attributes);
    setData(sdata)
    
   });
  }else{
    setData([])
  }

  },[search]);
 

const handler=(e)=>{

  
setSearch(e.target.value )
}

  return (
    
     <div className=' relative'>
  <div className="flex  gap-2 mx-auto  overflow-hidden mt-5  ">
     
        
        <div className="relative  w-full">
       <span className=' absolute top-3 left-3'> <IonIcon icon={searchOutline}/></span>
        <input type="text"  className="h-11 w-full pl-12  focus:outline-none hover:cursor-pointer" name="" onChange={handler}/>
        
        </div>
        
        

        <div className="bg-white pl-2 pr-2 flex items-center"> 
     


      <i className="iconsax filter-icon" data-icon="media-sliders-3"><svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M19 22.75C18.59 22.75 18.25 22.41 18.25 22V11C18.25 10.59 18.59 10.25 19 10.25C19.41 10.25 19.75 10.59 19.75 11V22C19.75 22.41 19.41 22.75 19 22.75Z" fill="#292D32"></path>
<path d="M19 7.75C18.59 7.75 18.25 7.41 18.25 7V2C18.25 1.59 18.59 1.25 19 1.25C19.41 1.25 19.75 1.59 19.75 2V7C19.75 7.41 19.41 7.75 19 7.75Z" fill="#292D32"></path>
<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="#292D32"></path>
<path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#292D32"></path>
<path d="M5 22.75C4.59 22.75 4.25 22.41 4.25 22V11C4.25 10.59 4.59 10.25 5 10.25C5.41 10.25 5.75 10.59 5.75 11V22C5.75 22.41 5.41 22.75 5 22.75Z" fill="#292D32"></path>
<path d="M5 7.75C4.59 7.75 4.25 7.41 4.25 7V2C4.25 1.59 4.59 1.25 5 1.25C5.41 1.25 5.75 1.59 5.75 2V7C5.75 7.41 5.41 7.75 5 7.75Z" fill="#292D32"></path>
<path d="M7 11.75H3C2.59 11.75 2.25 11.41 2.25 11C2.25 10.59 2.59 10.25 3 10.25H7C7.41 10.25 7.75 10.59 7.75 11C7.75 11.41 7.41 11.75 7 11.75Z" fill="#292D32"></path>
<path d="M21 11.75H17C16.59 11.75 16.25 11.41 16.25 11C16.25 10.59 16.59 10.25 17 10.25H21C21.41 10.25 21.75 10.59 21.75 11C21.75 11.41 21.41 11.75 21 11.75Z" fill="#292D32"></path>
<path d="M14 13.75H10C9.59 13.75 9.25 13.41 9.25 13C9.25 12.59 9.59 12.25 10 12.25H14C14.41 12.25 14.75 12.59 14.75 13C14.75 13.41 14.41 13.75 14 13.75Z" fill="#292D32"></path>
</svg>
</i>
        </div> 
      


      
  
</div>


<div className={`search-resul-b-s ${search==''&&'hidden'} bg-white absolute  p-3 w-full z-50 `}>
<h5 className="mt-1 text-[rgba(155,163,170,1)]">Showing {data.length} results for {search}</h5>

<ul>
 {
  loop(data,(value,i)=>{
   console.log(value.item.attributes.img.data[0].attributes.url)

    return(
      <li >
  <div className='  bg-[#fff] rounded-xl p-4 mb-2 '>
<Link href={`/products/${value.item.attributes.name}`}>
<div className="flex items-centerr gap-4">
<div href="#" className='w-[48px] h-[48px]  flex items-center justify-center bg-[#f4f5f6] rounded-md '>
<Image src={ value.item.attributes.img.data[0].attributes.url} alt='3' width={60} height={60} />

</div>
<div className=" w-[70%]  p-detail">
<div className="  flex gap-4 justify-between">      
<h4 className='truncate'>
   {value.item.attributes.name}
</h4>
 

</div>
<div className="flex items-center gap-4">



</div>

<div className="mt-1  flex justify-between font-bold">

<p className=' text-[1rem] font-medium text-[#020310]'>
      {value.item.attributes.discountPrice?value.item.attributes.discountPrice:value.item.attributes.price}

      <span className=' ml-[0.25rem] text-[#747794]  text-[0.875remrem] line-through'>{value.item.attributes.discountPrice&&value.item.attributes.price }</span>
      </p>


</div>
</div>

</div>
</Link>
</div>
  </li>
    )
  })
 }
</ul>
  
  
  </div> 
  
</div>
   
  )
}
