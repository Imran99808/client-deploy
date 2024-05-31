
import { cookies } from 'next/headers'
import React from 'react'
import Image from 'next/image'


import {fetch_data} from '@/app/lib/fetchdata'
import Login from './Login';




  

 async function Header() {
let token;
  try{

     token=cookies().get('jwt').value;
  }catch{
    token=null
  }
    
    
    
    const data=await fetch_data("api/p-categories?populate=*");
    const logo=await fetch_data('api/logo?populate=*');
const data2=await fetch_data("api/auth-users",token);
 

  return (
    <header className='header bg-[#fff]l mt-3'>
      <div className='container flex justify-between h-full items-center'>
      
       {/* <Nav data={data}/> */}
      
      <div className="logo lwidth   ">
       {logo.data && <Image  src={logo.data.attributes.Img.data.attributes.url} alt='' width={291} height={95}/>}
     </div>
     <div  className='w-10  h-10 flex justify-center items-center text-[rgb(18,38,54)] bg-[#fff] border-solid border-2 border-[rgba(18,38,54,0.1)] rounded-full text-xl'>
 {!token?
//  <a href="http://localhost:1337/api/google/auth"><ion-icon name="person-outline" size=''></ion-icon></a>
<Login/>
  : 
  // <img src={data2.img} alt="z" />


  <Image src={data2.img} alt='' width={100} height={100} className='w-full h-full rounded-full'/>
 }
 
      </div>
      </div>
    </header>
  )
}




export default Header;