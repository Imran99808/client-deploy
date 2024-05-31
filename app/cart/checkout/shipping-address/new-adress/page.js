'use client'
import { useRouter } from 'next/navigation';
import React,{ useContext, useEffect, useState} from 'react'
import { post } from '@/app/lib/fetchdata';
import { theme } from '@/app/context/AddContext';
export default function Page() {
    const {address,setAdress}=useContext(theme)
    const[pInfo,setInfo]=useState({});
    const[check,setCheck]=useState(address.locationName)
    const [a,setA]=useState(address.address)
    const router=useRouter();



    useEffect(()=>{
        setInfo(address)

    },[address])

   const filter=(value,step)=>{
      let v=''
      let count=0;
     for(let i=0;i<value.length;i++){
        v+=value.charAt(i);
        if(value.charAt(i)==='/'){
          count++;
        }
        if(count===step){
            break;
        }
      
     }
     return v;
   } 
    const onchange=(e)=>{
 const name=e.target.name;
 let retunValue;
 
 if(name==="division"){
    setInfo({...pInfo,[name]:e.target.value});
    
    setA(e.target.value+'/')
 }else if(name=='district'){
    setInfo({...pInfo,[name]:e.target.value});
      retunValue=filter(a,1);
    setA(retunValue+e.target.value+'/')

 }else if(name=='subDistrict'){
    retunValue=filter(a,2);
    setA(retunValue+e.target.value+'/')
    setInfo({...pInfo,[name]:e.target.value});
 } 
    else if(name==='address'){
        setA(a=>e.target.value)
        setInfo({...pInfo,[name]:e.target.value});
     
    }else{

        setInfo({...pInfo,[name]:e.target.value});
    }



    }


    const onclick=(e)=>{

    if(e.target.name==='action'){
       if(pInfo.name&&pInfo.phone&&pInfo.division&&pInfo.address){
         pInfo.locationName=check;
        
         post('api/customer-adresses',pInfo)
         .then(data=>{
            console.log(data)
         if(data){
            setAdress(pInfo);
            router.replace('/cart/checkout');
            
         }
         })
         
        }
//    router.replace('/')
    }else{
        setCheck(e.target.name)
    }
        
  
    }
   
  
    return (
        <div className="mt-5 pb-[160px]  ">
            <div className="container">
                <div className="from bg-[#fff] p-3 ">
                    <form  >
                        <div className="f-input">
                            <label htmlFor="" className='  font-medium'>Name</label>
                            <div className="f-input w-full mb-3 mt-2">
                                <input type="text" name='name' className='p-[15px] w-full rounded-md border-none text-[14px] bg-[rgba(246,246,247,1)]' placeholder='Enter your name' value={pInfo.name} onChange={onchange} />
                            </div>
                        </div>
                        <div className="f-input">
                            <label htmlFor="" className='  font-medium'>Phone Number</label>
                            <div className="f-input w-full mb-3 mt-2">
                                <input type="text" name='phone' className='p-[15px] w-full rounded-md border-none text-[14px] bg-[rgba(246,246,247,1)]' placeholder='Enter your number' value={pInfo.phone} onChange={onchange}/>
                            </div>
                        </div>
                        
                        <div className="f-input">
                            <label htmlFor="" className='  font-medium'>Division</label>
                            <div className=" w-full mb-3 mt-2">
                            <select name='division' className='p-[15px] w-full rounded-md border-none text-[14px] bg-[rgba(246,246,247,1)]' value={pInfo.division} onChange={onchange}>
                                <option value="volvo" >Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            </div>
                        </div>

                        <div className="f-input">
                            <label htmlFor="" className='  font-medium'>Districk</label>
                            <div className=" w-full mb-3 mt-2">
                            <select name='district' className='p-[15px] w-full rounded-md border-none text-[14px] bg-[rgba(246,246,247,1)]' value={pInfo.district} onChange={onchange}>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            </div>
                        </div>
                        
                        <div className="f-input">
                            <label htmlFor="" className='  font-medium'>Sub Districk</label>
                            <div className=" w-full mb-3 mt-2">
                            <select name="subDistrict" id="cars" className='p-[15px] w-full rounded-md border-none text-[14px] bg-[rgba(246,246,247,1)]' value={pInfo.subDistrict}   onChange={onchange}>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            </div>
                        </div>


                        <div className="f-input">
                            <label htmlFor="" className='  font-medium'>Delivary Address</label>
                            <div className="  f-input w-full mb-3 mt-2    ">
                               
                                <input type="text-area" name='address' className=' p-[15px] w-full rounded-md border-none text-[14px] bg-[rgba(246,246,247,1)] h-[80px] ' placeholder='Enter your number' value={a} onChange={onchange} />
                            </div>
                        </div>
                      
                      <div className="check flex gap-4 justify-center  pt-3">
                      <div className="check flex justify-center items-center gap-2">
                           <input type="checkbox" name='home' className='rounded-full w-4 h-4 b-a appearance-none' id='r1' onClick={onclick} checked={check==='home'}/>
                            <label htmlFor="r1"  className='text-[14px] font-semibold'>Home</label>
                        </div>

                        <div className="check flex justify-center items-center gap-2">
                            <input type="checkbox" name='office' className='rounded-full w-4 h-4 b-a appearance-none' id='r1'   onClick={onclick} checked={check==='office'}/>
                            <label htmlFor="r1"  className='text-[14px] font-semibold'>Office</label>
                        </div>

                        <div className="check flex justify-center items-center gap-2">
                            <input type="checkbox" name='other' className='rounded-full w-4 h-4 b-a appearance-none' id='r1'  onClick={onclick} checked={check==='other'}/>
                            <label htmlFor="r1" className='text-[14px] font-semibold'>Other</label>
                        </div>

                      </div>

                 
                    </form>
                </div>
                
          <div className=" fixed bottom-[80px]   left-0 right-0 text-center">
        <button name='action' className="btn cal bg-[rgba(18,38,54,1)] text-[#fff]  pt-2 pb-2 pl-4 pr-4 rounded-lg   " onClick={onclick}>Apply</button>
        </div>
    
            </div>
        </div>
    )
}
