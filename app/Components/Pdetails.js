'use client'
import React, { useState } from 'react'
import { loop } from '../lib/loop'
import AddCard from './AddCard'
import QtyButton from './QtyButton'
import { IonIcon } from '@ionic/react'
import { chevronUpOutline } from 'ionicons/icons'

export default function Pdetails({data}) {
    const price=data.discountPrice?data.discountPrice:data.price;
     const[qty,setqty]=useState(1);
    const[check,setCheck]=useState('0')
    
       console.log(data.qty)
    const returnQty=(value)=>{
        setqty(value)
         
    }
    const handler=(e)=>{
        
       setCheck( e.target.getAttribute('value'));
    }
  return (
    <>
    <div className="mt-4 bg-[#fff] p-3 flex justify-between items-center">
            <div className="color-family">
                <h1 className='text-[rgba(155,163,170,1)]'>Color</h1>
                <div className="check-box flex gap-2">
                   
                    {loop(data.color,(value,i)=>{
// console.log(i)
                        return(
                            <div style={{backgroundColor:value.color}} key={i} value={i} className={` flex justify-center items-center ${check===`${i}`&&'ring-offset-2 ring-2'} text-[#fff] text-[13px] w-4 h-4  rounded-full  `} onClick={handler}>
                           
                            </div> 
                        )
                    })}
                </div>
            </div>
             <QtyButton returnQty={returnQty} singleQty={qty}/>
        </div>


































        <div className="mt-4 bg-[#fff]">
        <div style={{display:data.specifications?'':'none'}}  className="des  p-3">
            <div className="flex justify-between items-center">
        <h1>Specifications</h1>

        <span className=' text-lg'><IonIcon icon={ chevronUpOutline}/></span> 
        </div>

        <div className='text-[14px] mt-2 text-[rgba(155,163,170,1)]'>{data.specifications}</div>
    </div>

    <div style={{display:data.features?'':'none'}}  className="des  p-3">
    <div className="flex justify-between items-center">
        <h1>Features</h1>
        <span className=' text-lg'><IonIcon icon={ chevronUpOutline}/></span> 
        </div>

       <div className='text-[14px] mt-2 text-[rgba(155,163,170,1)]'>{data.features}</div>
    </div>

    <div style={{display:data.descripetion?'':'none'}} className="des  p-3">
    <div className="flex justify-between items-center">
        <h1>Descripetion</h1>
        <span className=' text-lg'><IonIcon icon={ chevronUpOutline}/></span> 
        </div>

         <div className='text-[14px] mt-2 text-[rgba(155,163,170,1)]'>{data.descripetion}</div>
    </div>
    </div>






















    <div className="c bg-[#fff] fixed bottom-[60px] left-0  z-50  right-0 ">
                  <div className="container flex justify-between pt-4 pb-4 items-center">
                      <div>
                          <h5 className='text-[rgba(155,163,170,1)]'>Tota price</h5>
                          <span>${price*qty}</span>
                      </div>
                      <AddCard from='Pdetails' colorindex={check} data={data} qty={qty} />
                   
                  </div>
              </div>
    </>
  )
}
