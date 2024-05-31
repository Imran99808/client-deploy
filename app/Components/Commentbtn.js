'use client'
import React, { useEffect, useState } from 'react'

import { loop } from '../lib/loop';
import { post } from '../lib/fetchdata';
import { IonIcon } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';







export default function Commentbtn({id,data,retunfunc}) {
    const[count,setcount]=useState();
    const[tValue,setTvalue]=useState('');

const arr=[1,1,1,1,1];

const changeHandler=(e)=>{
    
    setTvalue(e.target.value)
  
}

useEffect(()=>{
    setcount(data.rating);
    setTvalue(data.comment)

},[data])









const handler=(e)=>{
   
     setcount(e.target.id)
}


















const submit=async()=>{
   
  
if(count!=data.rating||tValue!=data.comment){
    
   
   const data= await post('api/reviews',{count,tValue,id});
   
    retunfunc()
   
}
    
}

  return (
    <div className="ratings-submit-form bg-white py-3 dir-rtl">
    <div className="container">
      <h6>Submit A Review</h6>
      <div>
        <div class="flex gap-3 mt-2 mb-3">
            {loop(arr,(value,i)=>{
                console.log(i+1<=count)

                return(
                    // <ion-icon id={i+1} name={i+1<=count?'star':'star-outline'}></ion-icon>
                    <li key={i} className='text-[1.6rem]' id={i+1} onClick={handler}><IonIcon id={i+1} icon={i+1<=count?star:starOutline}/></li>
                )
            })}
     
       
        </div>
        <textarea style={{border:'2px solid rgba(155,163,170,1)'}} className=" w-full p-4 h-[80px] form-control mb-3" id="comments" name="comment" cols="30" rows="10" data-max-length="200" value={tValue} placeholder="Write your review..." onChange={changeHandler}></textarea>
        <button className={`btn  pl-2 pr-2 pt-1 pb-1 text-[0.9rem] font-medium rounded-md text-[#fff] ${data.rating||data.comment?' bg-red-700':' bg-black'} `} name='action' type="submit" onClick={submit}>{data.ratingt||data.comment?'Update':'Save'} Review</button>
        </div>
    </div>
  </div>
  )
}
