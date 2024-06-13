import React from 'react'
import { loop } from '../lib/loop';
import Link from 'next/link';
import Wishbutton from './Wishbutton.1';
import AddCard from './AddCard';
import Image from 'next/image';
import Star5 from './Star5';
import Card from './Card';
function ProductCard({data,f}) {
 

  
  return (
  
    <>


    {loop(data,(value,i)=>{
      
      const star=value.reviewCount?value.star/value.reviewCount:0
     
     
      return(
        <>
   <Card key={i} value={value}/> 

</>

      )

    })}  
   










   


   </>
  )
}

export default ProductCard
