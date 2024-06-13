'use client'
import React, { useContext, useEffect, useState } from 'react'
import { post } from '../lib/fetchdata';
import { theme } from '../context/AddContext';
import { IonIcon } from '@ionic/react';
import { addOutline,cartOutline } from 'ionicons/icons';

function AddCard({data,from,colorindex,qty,card}) {
  
  let qt=qty?qty:1;
  const {values,setValue}=useContext(theme)
  const[toogole,setToogole]=useState(false);

    const colorIndex=colorindex?colorindex:0;
    const upData={...data};
    
     
    upData.color=upData.color[colorIndex];
    upData.qty=qt;
    upData.colorIndex=colorIndex;

  
    
 const check=(value,data)=>{
   
  for(let i=0;i<value.length;i++){
    const singleData=value[i];
   

    if(singleData.id===data.id&&singleData.color.color===data.color.color){
      return true;
    }
  }
  return false;
 }



 const has=check(values,upData)   ;
    const handler=async(e)=>{
     e.preventDefault();
   
if(!has){
      const r=await  post('api/add-cards',{id:data.id,colorIndex,qt});


       setValue([...values,upData])
}
    
        
    }


   

  return (
    <>
  {
    from? <button className="btn bg-[rgba(18,38,54,1)] text-[#fff] pt-2 pb-2 pl-4 pr-4 rounded-lg   " onClick={handler} disabled={has}>Add to cart</button>
        :card?<button className=' flex items-center' onClick={handler}> <IonIcon icon={cartOutline}/></button>:  <button className=' absolute right-4 bottom-4 rounded-full bg-b  text-[#fff] w-7 h-7 flex justify-center items-center'  onClick={handler}> <IonIcon icon={addOutline}/></button>
  }
  </>
  )
}

export default AddCard
