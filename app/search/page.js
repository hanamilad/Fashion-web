"use client"
import Result from './Result'
import React, { useEffect, useRef, useState } from 'react'
import data from '../_components/json.json'

function Searchpage() {
  const [value,setvalue]=useState()
  const [Data,setData]=useState()
  const valueSearch = useRef()
  const handelchange = () => {
    setvalue(valueSearch.current.value)
    showreslt()
  }
  const showreslt=()=>{
    const filterdata = data.filter((ele) => ele.name.trim().length > 0 && ele.name.includes(value));
    if(filterdata.length !== 0){
      setData(filterdata)
    }else{
      setData([])
    }
  }
  useEffect(()=>{ 
    handelchange()
    showreslt()
    },[])

  return (
<>


    <div className='p-2 m-auto w-3/4 max-[600px]:w-[100%]  flex gap-1 items-center '>
        <input ref={valueSearch} onChange={handelchange}     type='search' placeholder='search' autoFocus  className='border-none mt-2 w-full bg-gray-200 p-3  ' />
    </div>
    <Result value={value} Data={Data} />
</>
  )
}

export default Searchpage