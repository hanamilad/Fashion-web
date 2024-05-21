'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Alldata from "../_components/json.json"

function Card() {
  const [items,setitems]=useState()
  const getdata=()=>{
    const menData = Alldata.filter(ele => ele.name.startsWith('m')).slice(0, 6);
    const womenData = Alldata.filter(ele => ele.name.startsWith('w')).slice(0, 6);
    setitems([...menData, ...womenData]);
  }

useEffect(()=>{
  getdata()
},[])





  return (
    <div className='grid md:grid-cols-3 p-7 md:mx-10 justify-items-center  gap-9 mt-5 max-[600px]:grid-cols-2'>
    {
        items?.map((item,index)=>{
            return(
              <div key={index} className='overflow-hidden rounded-md   dark:bg-gray-800   '>
 <Link href={"product/" + item.id} key={index} className="block rounded-lg p-    shadow-indigo-100">
  <Image
    alt="image"
    src={item.url}
    width={500}
    height={300}
    className="h-60 w-fit max-[600px]:h-40 rounded-md object-center"
  /> 
</Link> 
<div className='text-black  capitalize flex flex-col gap-2 mt-4 '>
  <h1 className='font-extrabold'>{item.name}</h1>
  <p className='text-red-950'>${item.price} USD</p>
  <div className='flex gap-3 p-1'>
  <div> colors :</div>
    <div className='bg-gray-400 w-4 h4 text-gray-400'>.</div>
    <div className='bg-black w-4 h4'>.</div>
  </div>
</div>
</div>

            )
        })
    }
    </div>

  )
}

export default Card



