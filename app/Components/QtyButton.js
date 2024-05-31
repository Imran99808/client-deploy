'use client'
import { IonIcon } from '@ionic/react';
import { addOutline, removeOutline } from 'ionicons/icons';
import React, { useState } from 'react'

export default function QtyButton({returnQty,singleQty}) {
 
  
  let qty=singleQty;
  
  
  
  const handler=(e)=>{
    e.preventDefault()
  
    if(e.target.id==='0'){
     
       qty>1&&(qty-=1, returnQty(qty));
      
      
    }else{
      // setqty(qty+1)
      qty+=1
    
      returnQty(qty,true)
    }
  }
  return (
    <div  className="flex justify-between items-center bg-[#f4f5f6] p-1 w-[85px] rounded-full">
    <button name='remove-outline' className='  rounded-full bg-[#fff] text-[#000] w-6 h-6   text-lg flex justify-center items-center' onClick={handler}><IonIcon id='0'  icon={removeOutline}/></button> 
    <span>{qty}</span>
    <button name='add-outline' className='  rounded-full bg-[rgba(18,38,54,1)] text-[#fff] w-6 h-6 text-lg flex justify-center items-center' onClick={handler}><IonIcon id='1'  icon={addOutline}/></button>
    </div> 
    
  )
}

