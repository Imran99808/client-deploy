'use client'
import React, { useEffect, useState } from 'react'
import { getData } from '@/app/context/AddContext';
import { useSearchParams } from 'next/navigation';
import { loop } from '@/app/lib/loop';
import Image from 'next/image';
function Page() {
  const [data, setData] = useState([]);
  const resul = useSearchParams()
  const id = resul.get('id')
  useEffect(() => {
    getData(`api/reviews/${id}?&limit=${10}`).then(data => {

      data.data = data.data ? data.data : [];
      setData(data.data);
    });

  },[data]);
  
  return (
    <div className=' mt-4  p-3 container'>
      {data &&

        loop(data, (value, i) => {


          return (
            <li key={i} className=" mb-5  flex gap-1 mb-4">
              <div className="user-thumbnail w-7  h-7 "><Image src={value.profile} alt='' width={30} height={30} className='w-full h-full rounded-full' /> </div>
              <div className="rating-comment">
                <div className="rating"><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i></div>
                <p className=" text-[rgba(155,163,170,1)] text-[14px] mb-0">{value.comment}</p>
                <span className=" text-[rgba(155,163,170,1)] text-[12px]">{value.updatedAt}</span>

              </div>
            </li>
          )
        })


      }
    </div>
  )
}

export default Page