'use client'
import React, { useContext, useEffect, useState } from 'react'
import { loop } from '../lib/loop'
import { getData, theme } from '../context/AddContext'
import AddCard from './AddCard';
import Wishbutton from './Wishbutton.1';
import Link from 'next/link';
import Image from 'next/image';



  export default function InfintScroll({children,path,limit,populate,name}) {
 
 
    const [start,setStart]=useState(limit);
    const{data,setData}=useContext(theme); 
    const[loading,setLoading]=useState(false);
    let params=populate?`&populate[products][start]=${data[name]?data[name].length+limit:limit}&populate[products][limit]=${limit}`
                       :`&start=${data[name]?data[name].length+limit:limit}&limit=${limit}`

// {data.length?data.length+limit:limit}
const handler=async(e)=>{
  // window.innerHeight+window.scrollY===document.documentElement.scrollHeight window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight
  // console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,', window.innerHeight+window.scrollY,document.documentElement.scrollHeight)
    if( window.innerHeight+window.scrollY===document.documentElement.scrollHeight){
     
     
      setLoading(true);
      const result=await getData(path+params)
     
           if(result){
          
          
             
              setLoading(false)
              if(!data[name]){
                setData({[name]:populate?result.data.products:result.data});
              }else{
                setData({[name]:[...data[name],...populate?result.data.products:result.data]});
              }
            // setData(data=>[...data,...result.data])
            // setStart(start+limit)
           }
           
        
           
          
          // const result=await getData(`api/products?populate=*&start=${0}&limit=${10}`)
         
    }
}


useEffect(()=>{
  // const sameValue=data.length?data.length:limit;

 
    window.addEventListener('scroll',handler);
  

  return()=>window.removeEventListener('scroll',handler);
   
 
 


   
})










  return (
    <>
     {loop(data[name]?data[name]:[],(value,i)=>{
      
   
      const star=value.reviewCount?value.star/value.reviewCount:0
       
     
      return(
        <>
   
    
   
    <div className={`bg-white rounded-xl  } `} key={i}  >
    <div className=' p-4 relative '>
      <span className=' absolute   bg-b text-xs  pl-1 pe-1 rounded-full text-[#fff]'>new</span>
      <span className=' absolute right-3  text-xl'><Wishbutton key={i} productData={value}/></span>
      <Link href={`/products/${value.name}`}>
      {/* <div className="  h-[149px]"> */}
      {/* <Link href={`/products/${value.name}`}> */}
      {/* <img src={'http://localhost:1337'+value.img[0].url}   /> */}
      <Image src={value.img[0].url} alt='' width={300} height={100}/>

      {/* </Link> */}
      {/* </div> */}
      {/* <Link href={`/products/${value.name}`}> */}
      <span>{value.name}</span>

      <p className='mt-2 text-[1.25rem] font-medium text-[#020310]'>
      {value.discountPrice?value.discountPrice:value.price}

      <span className=' ml-[0.25rem] text-[#747794]  text-[0.875rem] line-through'>{value.discountPrice&&value.price}</span>
      </p>
      <div>
      <ion-icon name={1<=star?'star':'star-outline'}></ion-icon>
      <ion-icon name={2<=star?'star':'star-outline'}></ion-icon>
      <ion-icon name={3<=star?'star':'star-outline'}></ion-icon>
      <ion-icon name={4<=star?'star':'star-outline'}></ion-icon>
      <ion-icon name={5<=star?'star':'star-outline'}></ion-icon>
      
        {/* <i className="fa-regular text-xs fa-star"></i> */}
      </div>
      </Link>
{   <AddCard key={i} data={value}/> }
      <div></div>

    </div>
  </div>









   

</>

      )
     

    })}  
   {loading&&   
   <div className='absolute bottom-0 text-center  left-0 right-0 '>InfintScroll....</div>
   }
    </>
  
  )
}























































// const star=value.reviewCount?value.star/value.reviewCount:0
//         console.log('http://localhost:1337'+value)
     
//       return(
//         <>
//    {
    
   
//     <div className={`bg-white rounded-xl  } `} key={i}  >
//     <div className=' p-4 relative '>
//       <span className=' absolute   bg-b text-xs  pl-1 pe-1 rounded-full text-[#fff]'>new</span>
//       <span className=' absolute right-3  text-xl'><Wishbutton key={i} productData={value}/></span>
//       <Link href={`/products/${value.name}`}>
//       <div className="  h-[149px]">
//       {/* <Link href={`/products/${value.name}`}> */}
//       <img src={'http://localhost:1337'+value.img[0].url}   />
        

//       {/* </Link> */}
//       </div>
//       {/* <Link href={`/products/${value.name}`}> */}
//       <span>{value.name}</span>

//       <p className='mt-2 text-[1.25rem] font-medium text-[#020310]'>
//       {value.discountPrice?value.discountPrice:value.price}

//       <span className=' ml-[0.25rem] text-[#747794]  text-[0.875rem] line-through'>{value.discountPrice&&value.price}</span>
//       </p>
//       <div>
//       <ion-icon name={1<=star?'star':'star-outline'}></ion-icon>
//       <ion-icon name={2<=star?'star':'star-outline'}></ion-icon>
//       <ion-icon name={3<=star?'star':'star-outline'}></ion-icon>
//       <ion-icon name={4<=star?'star':'star-outline'}></ion-icon>
//       <ion-icon name={5<=star?'star':'star-outline'}></ion-icon>
      
//         {/* <i className="fa-regular text-xs fa-star"></i> */}
//       </div>
//       </Link>
// {   <AddCard key={i} data={value}/> }
//       <div></div>

//     </div>
//   </div>









//    }

// </>

//       )