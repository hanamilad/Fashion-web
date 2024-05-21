"use client"
import React, { useContext, useEffect, useState } from 'react'
import Alldata from "../../_components/json.json"
import Image from 'next/image'
import { useUser} from '@clerk/nextjs'
import {useRouter} from "next/navigation"
import Swal from 'sweetalert2'




  
function Page({params}) {

  const {user,isSignedIn}=useUser()
  const router = useRouter();

  const id = params.product;
  const ele = Alldata.filter((ele) =>ele.id == id);
  const [data,setdata]=useState(ele[0])


const Addproductitem = () => {
  if (isSignedIn) {
    const storedProducts = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('products')) : [];
    const isProductExist = storedProducts.some((product) => product.id === data.id);

    if (!isProductExist) {
      storedProducts.push(data);
      localStorage.setItem("products", JSON.stringify(storedProducts));    
      Swal.fire({
        title: 'success',
        text: 'Done',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    } else {
      Swal.fire({
        title: 'warning!',
        text: 'Product already exists in your Cart',
        icon: 'warning',
        confirmButtonText: 'Cool'
      })
      console.log("Product already exists in localStorage");
    }
  } else {
    router.push("/sign-up");
  }
};




  useEffect(()=>{
  },[params])

 
  return (
    <div className='grid gap-2 grid-cols-2 p-5 max-[600px]:grid-cols-1 '>
    <div className=''>
      <Image alt='image' src={data.url} width={400} height={400}  />
    </div>
    <div className='flex flex-col justify-evenly'>
    <h2 className='capitalize text-3xl text-center font-extrabold '>{data.name}</h2>
    <ul className='m-3 font-extrabold '>
      <li>Soft, comfortable tee for everyday wear.</li>
      <li>Classic style fits any outfit.</li>
      <li>Express yourself with our unique designs.</li>
    </ul>
    <div className='flex justify-around  mt-6 max-sm:flex-col gap-4'>
      <div className='font-extrabold'>
      Price: <span className='bg-green-950 text-white border-2 p-2 rounded-md'>${data.price}</span> <span className='line-through text-red-800'> $ {+data.price + 500}</span>
      </div>
      <button onClick={Addproductitem} className='bg-blue-800 p-2 text-white rounded-md'>Add To Cart</button>
    </div>


    </div>

    </div>
  )
}

export default Page