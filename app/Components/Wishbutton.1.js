'use client';

import React, { useContext, useState } from 'react';
import { theme } from '../context/AddContext';
import { post } from '../lib/fetchdata';
import { IonIcon } from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';
// import { useRouter } from 'next/router';

export default function Wishbutton({ productData, remove, cb }) {
  const [hasWish, setwish] = useState(productData.hasWishlist);

  const { values2, setValue2 } = useContext(theme);

  const data = productData;


  const check = () => {
    let has = false;
    let index = 0;
    for (let i = 0; i < values2.length; i++) {

      if (values2[i].id === data.id) {
        has = true;
        index = i;
        break;

      }
    }
    return { has, index };
  };
  









  

  const clientCheck = check();
  data.hasWishlist = clientCheck.has ? values2[clientCheck.index].hasWishlist : data.hasWishlist;
  

  const handler = async (e) => {

    e.preventDefault()

    remove && cb(data.id);

    const result = await post('api/wish-lists', { id: data.id, productData: data });
    //      console.log(result)
    clientCheck.has ? (values2[clientCheck.index].hasWishlist = !values2[clientCheck.index].hasWishlist, setwish(!hasWish)) : setValue2([...values2, { id: data.id, hasWishlist: !data.hasWishlist }])
  };






  return (
    <>
       <button className='flex items-center' onClick={handler}>{remove ? 'remove' :<IonIcon icon={data.hasWishlist ? heart : heartOutline} />}</button>
      {/*
  
  <li onClick={handler}><ion-icon name={data.hasWishlist ? 'heart' : 'heart-outline'}>opp</ion-icon></li>
  




    <li  onClick={handler} ><ion-icon name={hasWish?'heart':'heart-outline'}>opp</ion-icon></li>

           */}




    </>
  );
}
