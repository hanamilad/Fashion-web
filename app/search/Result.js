"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


function Result({value,Data}) {
  const [Result,setResult]= useState()

  useEffect(() => {
    setResult(Data)
  }, [value]);

  return (

    <div className='bg-gray-600'>
      {Result && Result.length > 0 ?  
        Result.map((item) => (
          <div key={item.id}>
          <Link href={"product/" + item.id}>
            <div className='font-semibold bg-slate-800 p-4 text-white my-4 hover:bg-slate-400 '>{item.name}</div>
            </Link>
          </div>
        )) 
        : 
        <div className='text-center mt-4'>
          <h2>No item</h2>
        </div>
      }
    </div>
  )
}

export default Result