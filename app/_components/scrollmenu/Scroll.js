"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import data from "../json.json"
import Link from 'next/link'

function Scroll() {
  const chose = data.filter((ele)=>ele.name.startsWith("s"))
  const [List,setList]=useState(chose)

  return (
    <div className="flex overflow-x-auto mt-10  gap-4" id='scroll'>
{List.map((ele,index)=>{
  return(
      <div    key={index} className="flex-none w-40 h-40 rounded-full items-center cursor-pointer flex justify-center bg-gray-200">
      <Link  href={"product/" + ele.id}>
      <Image alt='shose' src={ele.url} width={150} height={150} className='h-[150px]' />
       
      </Link></div>
  )
})


}
   
    </div>
  )
}

export default Scroll