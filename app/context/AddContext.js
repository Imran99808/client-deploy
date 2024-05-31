'use client'

import React,{useState, useEffect} from "react";
export const theme=React.createContext();




export const getData=async(url,data)=>{
//  let d={};
 const response=await  fetch(`https://server-deploy-6984.onrender.com/${url}`, {
      method: 'GET',
      credentials: 'include',
      
 }
      )

      if(!response.ok){

         return null;
      }
      return await response.json();
   

}

export const AddProvider=({children})=>{
 const [authorived,setAuth]=useState(false) ;
 const[values,setValue]=useState([]);
 const[values2,setValue2]=useState([])
 const[address,setAdress]=useState({});
 const[data,setData]=useState({});

 const [c,setC]=useState([])
 useEffect(()=>{
 
   getData('api/add-cards').then(data=>{
     console.log(data)
      data.data&&setAuth(true);
      data.data=data.data?data.data:[];
     
      setValue(data.data);
   });
   getData('api/customer-adresses').then(data=>{
      data.data=data.data?data.data:{};
      setAdress(data.data);
   });

 
   

  
 },[])
 console.log('noo...................................',authorived)
    
   return(
    <>
     <theme.Provider value={{values,setValue,authorived,values2,setValue2,address,setAdress,data,setData,c,setC}}> {children}</theme.Provider>  
  
 
   
    </>
   )

}


















// fetch('http://localhost:1337/api/add-cards', {
//    method: 'GET',
//    credentials: 'include',
// }
//    )
// .then(response=>{
//    if(!response.ok){

//     return null;
//    }
//    return response.json();
// })
// .then(data=>{
//    console.log(data)
//    setValue(data.data);
// })
