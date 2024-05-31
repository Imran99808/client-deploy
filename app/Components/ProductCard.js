import React from 'react'
import { loop } from '../lib/loop';
import Link from 'next/link';
import Wishbutton from './Wishbutton.1';
import AddCard from './AddCard';
import Image from 'next/image';
import Star5 from './Star5';
function ProductCard({data,f}) {
 

  
  return (
  
    <>


    {loop(data,(value,i)=>{
      
      const star=value.reviewCount?value.star/value.reviewCount:0
     
     
      return(
        <>
   {
    
   
    <div className={`bg-white rounded-xl  ${(f&&i==0)&&'hidden'} } `} key={i}  >
    <div className=' p-4  h-full  relative '>
      <span className=' absolute   bg-b text-xs  pl-1 pe-1 rounded-full text-[#fff]'>new</span>
      <span className=' absolute right-3  text-xl'><Wishbutton key={i} productData={value}/></span>
      <Link href={`/products/${value.name}`}>
      {/* <div className=" h-[149px]"> */}
      {/* <Link href={`/products/${value.name}`}> */}
      {/* <img src={process.env._APP_URL+value.img[0].url}   /> */}
      <Image src={value.img[0].url} alt='' width={300} height={100}/>

      {/* </Link> */}
      {/* </div> */}
      {/* <Link href={`/products/${value.name}`}> */}
      <h1 className='truncate'>{value.name}</h1>

      <p className='mt-2 text-[1.25rem] font-medium text-[#020310]'>
      {value.discountPrice?value.discountPrice:value.price}

      <span className=' ml-[0.25rem] text-[#747794]  text-[0.875rem] line-through'>{value.discountPrice&&value.price}</span>
      </p>
      <div>
     <Star5 starValue={star}/>
        {/* <i className="fa-regular text-xs fa-star"></i> */}
      </div>
      </Link>
<AddCard key={i} data={value}/>
      <div></div>

    </div>
  </div>









   }

</>

      )

    })}  
   










   


   </>
  )
}

export default ProductCard