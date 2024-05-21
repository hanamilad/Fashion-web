"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Alldata from "../_components/json.json"
import  Link  from 'next/link'



function Women() {
    const data=Alldata.filter((ele)=>ele.name.startsWith("w"))
    const [items,setitems]=useState(data)
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

export default Women






//     <div className='grid md:grid-cols-4 max-[600px]:grid-cols-1'>

// {
//     items?.map((item,index)=>{
//         return(
//             <div key={index}>
// <Image
// alt=""
// src={item.url}
// width={500}
// height={300}
// className="h-60  w-full rounded-md object-center"
// />
// </div>
//         )
//     })
// }







// </div>