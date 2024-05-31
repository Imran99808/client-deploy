import Image from 'next/image'
import { cookies } from 'next/headers'
import React from 'react'
import i from '@/public/22.jpg'
import p1 from '@/public/11.png'
import { fetch_data } from '@/app/lib/fetchdata'
import Pdetails from '@/app/Components/Pdetails'
import ProductCard from '@/app/Components/ProductCard'
import PdetailsProducts from '@/app/Components/PdetailsProducts'
import Wishbutton from '@/app/Components/Wishbutton.1'
import Comment from '@/app/Components/Comment'
import ImageSlide from '@/app/Components/ImageSlide'
import Icon from '@/app/Components/Icon'




export async function generateMetadata({params}){
  let token;
  try{

     token=cookies().get('jwt').value;
  }catch{
    token=null
  }
    
  const{slug}=params
   const data=await fetch_data(`api/products/${slug}`,token);
  
   return{
    title:data.data[0].name,
    description:data.data[0].descripetion,
    openGraph:{
      images:[{
        url:data.data[0].img[0].url,
        width:1260,
        height:800, 
      }]
    }
   }
}

export default async function page({params}) {
  let token;
  try{

     token=cookies().get('jwt').value;
  }catch{
    token=null
  }
    
  const{slug}=params
   const data=await fetch_data(`api/products/${slug}`,token);
  
   const star=data.data[0].reviewCount&&data.data[0].star/data.data[0].reviewCount
 
  return (
    
    <>
  
{data.data&&
    
    <div className=" pDetails div container pb-[180px] ">
    <ImageSlide images={data.data[0].img}/>
   
      <div className="product-details  bottom-9 relative ">
          <div className="  bg-white p-3   rounded-tl-3xl pt-4 pb-4  ">
              <div className="flex justify-between">
               <div className="d">
                  <span className='block text-[20px]'>{data.data[0].name}</span>
                
                  <p className=' text-[1.25rem] font-medium text-[#020310]'>
      {data.data[0].discountPrice?data.data[0].discountPrice:data.data[0].price}

      <span className=' ml-[0.25rem] text-[#747794]  text-[0.875rem] line-through'>{data.data[0].discountPrice&&data.data[0].price }</span>
      </p>
               </div>
               <div className="  text-2xl">
               <Wishbutton productData={data.data[0]} />
               </div>
              </div>
              {/* rating */}
              <div className="flex  justify-between">
               
              <div className=' '>
              { star&&
                 <div className="">
               <Icon/>
                <span className='ml-1'>{star.toFixed(2)}</span>
                </div>
              }
            </div>

            {data.data.stock!=0?<h5 className=' text-green-500'>In Stock</h5>:<h5 className=' text-red-600'>Stock Out</h5>}
            
  
              </div>
          </div>
          <Pdetails data={data.data[0]}/>



          


        
      </div>
     
  <Comment id={data.data[0].id} name={ data.data[0].name}/>
 
 { data.data[0].category&&
   <PdetailsProducts name={ data.data[0].category.name}/>

 }
  
  
  
  
  
  
  
  
  
  
  
  
     
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      {/* <div className="c bg-[#fff] fixed bottom-[60px] left-0  z-50  right-0 ">
                  <div className="container flex justify-between pt-4 pb-4 items-center">
                      <div>
                          <h5 className='text-[rgba(155,163,170,1)]'>Tota price</h5>
                          <span>$120</span>
                      </div>
                      <div className="btn bg-[rgba(18,38,54,1)] text-[#fff] pt-2 pb-2 pl-4 pr-4 rounded-lg   "><a href="#">Add to cart</a></div>
                  </div>
              </div> */}
    </div>
  }
 </>

  )
}










































// {data.data[0]&&
    
//   <div className="div container pb-[180px] ">
//     <div  className="  container h-[380px] " style={{backgroundImage:`url(${process.env._APP_URL+data.data[0].attributes.img.data[0].attributes.url})`,backgroundPositionX:'center',backgroundPositionY:'center',backgroundSize:'300px',backgroundRepeat:'no-repeat'}}>
      
        
//     </div>
//     <div className="product-details  bottom-9 relative ">
//         <div className="  bg-white p-3   rounded-tl-3xl pt-4 pb-4  ">
//             <div className="flex justify-between">
//              <div className="d">
//                 <span className='block text-[20px]'>{data.data[0].attributes.name}</span>
               
//                 <div className="">
//                 <span>{data.data[0].attributes.price}</span>
//                 </div>
//              </div>
             
//              <Wishbutton productData={data.data[0]} />
           
//             </div>
//             {/* rating */}
//             <div className="flex  justify-between">
//             <div className=' '>
           
//            <ion-icon name="star-outline"></ion-icon>
//            <ion-icon name="star-outline"></ion-icon>
//            <ion-icon name="star-outline"></ion-icon>
//            <ion-icon name="star-outline"></ion-icon>
//             <ion-icon name="star-outline"></ion-icon>

//             <span className='ml-1'>4.1</span>
            
//           </div>
//           {data.data[0].attributes.stock!=0?<h5 className=' text-green-500'>In Stock</h5>:<h5 className=' text-red-600'>Stock Out</h5>}
//           {/* <div className="flex justify-between items-center bg-[#f4f5f6] p-1 w-[85px] rounded-full">
//             <a className='  rounded-full bg-[#fff] text-[#000] w-6 h-6   text-lg flex justify-center items-center' ><ion-icon name="remove-outline"></ion-icon></a> 
//             <span>1</span>
//             <a className='  rounded-full bg-[rgba(18,38,54,1)] text-[#fff] w-6 h-6 text-lg flex justify-center items-center' ><ion-icon name="add-outline" ></ion-icon></a>
//             </div> */}

//             </div>
//         </div>
//         <Pdetails/>
      
//     </div>
   


// <PdetailsProducts id={data.data[0].attributes.category.data.id}/>












   
















































//     <div className="c bg-[#fff] fixed bottom-[60px] left-0  z-50  right-0 ">
//                 <div className="container flex justify-between pt-4 pb-4 items-center">
//                     <div>
//                         <h5 className='text-[rgba(155,163,170,1)]'>Tota price</h5>
//                         <span>$120</span>
//                     </div>
//                     <div className="btn bg-[rgba(18,38,54,1)] text-[#fff] pt-2 pb-2 pl-4 pr-4 rounded-lg   "><a href="#">Add to cart</a></div>
//                 </div>
//             </div>
//   </div>
// }