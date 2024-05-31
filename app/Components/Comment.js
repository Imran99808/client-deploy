'use client'
import React, { useEffect, useState } from 'react'

// import { cookies } from 'next/headers';
import Commentbtn from './Commentbtn'

import { loop } from '../lib/loop';

import { getData } from '../context/AddContext';
import Image from 'next/image';
import Link from 'next/link';



export default function Comment({ id, name }) {
  const userData = { rating: 0, comment: '' }


  const [data, setData] = useState([]);
  const [toogole, setToggole] = useState(true)

  useEffect(() => {
    getData(`api/reviews/${id}`).then(data => {
      console.log(data.data)
      data.data = data.data ? data.data : [];
      setData(data.data);
    });

  },[toogole])


  const retunfunc = () => {
    setToggole(!toogole)
  }








  return (
    <>
      <div class="rating-and-review-wrapper bg-white py-3 mb-3 dir-rtl">
        <div class="container">
          <div className=" flex justify-between ">
            <h6>Ratings &amp; Reviews</h6>
            <Link href={{
              pathname: `${name}/comments`,
              query: { id: id },
            }} className='font-medium  text-[rgba(155,163,170,1)] text-sm'>view All</Link>

          </div>
          <div class="rating-review-content">

            <ul class="ps-0 mt-4">

              {data &&

                loop(data, (value, i) => {

                  value.me && (userData.rating = value.rating, userData.comment = value.comment);
                  console.log(value.profile)
                  return (
                    <>{i<=5&&
                    <li key={i} className=" flex gap-1 mb-4">
                      <div className="user-thumbnail w-7  h-7 "><Image src={value.profile} width={70} height={70} alt='' className='w-full h-full rounded-full'  /> </div>
                      
                      <div className="rating-comment">
                        <div className="rating"><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i></div>
                        <p className=" text-[rgba(155,163,170,1)] text-[14px] mb-0">{value.comment}</p>
                        <span className=" text-[rgba(155,163,170,1)] text-[12px]">{value.updatedAt}</span>

                      </div>
                    </li>
                    }</>
                  )
                })


              }

            </ul>

          </div>
        </div>
      </div>




      <Commentbtn key={id} id={id} data={userData} name={name} retunfunc={retunfunc} />



    </>
  )
}
