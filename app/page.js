
import Image from "next/image";
import { Suspense } from "react";


import Search from "./Components/Search";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";

import Trending from "./Components/Trending";
import Offer from "./Components/Offer";



import b from '@/public/banner-2.jpg'
 import Product from "./Components/Product";





export default function Home() {
  
  
  return (
  <div className="container pb-20 ">
     
    <Search/>
    <Hero/>
   
     <Categories/>
     {/* <Suspense fallback="<h1>lodddd...</h1>"> */}
     <Offer/>
     {/* </Suspense>  */}
     <Suspense fallback="<h1>Loading feed...</h1>">
   <Trending/>
   </Suspense> 
   
   <Suspense fallback="<h1>lodddd...</h1>">
   <Product/> 
   </Suspense> 
 
  </div>
  );
}



  
