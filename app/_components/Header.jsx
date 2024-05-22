'use client'
import React, { useEffect, useState } from 'react';
import { Search, ShoppingCart} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

function Header() {
  const path = usePathname() 
  const [IsOpencart,SetOpencart]=useState()
  const [list,setlist]=useState(["Women","Men"])
  const [data, setData] = useState([]);

  const shopslide=()=>{
    SetOpencart(!IsOpencart)
    setData(JSON.parse(localStorage.getItem('products')) || []);
    
  } 
 
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem('products')) || []);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  },[])


  const handleStorageChange = () => {
    setData(JSON.parse(localStorage.getItem('products')) || []);
  };

  const deleteItem = (id) => {
    const filter=data.filter((ele)=>ele.id !== id)
    setData(filter);
    localStorage.setItem("products",JSON.stringify(filter))
  };

 

  return (
<header className="bg-white fixed w-[100%] h-[70px] z-50 ">
  <div className="mx-auto flex items-center gap-8 p-4 sm:px-6 lg:px-8 shadow-md ">
    <div className="flex flex-1 justify-between max-[600px]:justify- items-center ">  
      <div>
      <ul className="flex items-center gap-6 text-sm max-[600px]:hidden">
{list.map((name)=>{
  return( 
     <li key={name}>
        <a className={ path === `/${name}`   ? "text-blue-900 font-extrabold text-lg" :"text-gray-500 font-extrabold text-lg"} href={"/" + name}>{name}</a>  
      </li>
  )
})         
}
      </ul>
          <ul className="fixed bottom-3 right-2 left-2 bg-gray-500 min-[600px]:hidden flex p-2 justify-evenly gap-2 rounded-2xl">
          {list.map((name)=>{
  return( 
     <li key={name}>
        <a className={ path === `/${name}`   ? "text-blue-900 font-extrabold text-lg" :"text-white font-extrabold text-lg"} href={"/" + name}>{name}</a>  
      </li>
  )
})      
        
}
          
        </ul>
      </div>
      <div>
      <Link href='/'>
      <h1 className='font-bold text-3xl   '>
          Fashion
        </h1>
      </Link>
      </div>
      <div>
      <ul className='flex justify-around gap-2  items-center'>
      <li className='hover:bg-gray-400 rounded-lg p-2'>
       <Link href='/search' aria-label="Search" title="Search"  > <Search  size={25} strokeWidth={1} /></Link>
      </li>
      <li>

      </li>
      <li className='cursor-pointer hover:bg-gray-400 rounded-lg relative p-2'   onClick={shopslide}>
      <ShoppingCart size={25} strokeWidth={1} />
      <span className='absolute top-[-6px] right-[-4px]   text-black font-extrabold'>{data.length}</span>

      </li>
      <li>
        <UserButton />
      </li>

      </ul>

      </div>
      </div>
    </div>
    {
      IsOpencart &&  

          <div className='fixed sm:pl-[70vw] max-lg:pl-[25vw]  inset-0  bg-gray-400 bg-opacity-20'>
<div
   className="relative border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 h-[100%]"
  aria-modal="true"
  role="dialog"
  tabIndex="-1"
>
  <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110" onClick={shopslide}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  <div className="mt-4 space-y-6">
    <ul className="space-y-4">
    {data.map((ele)=>{
        return(
      <li  key={ele.id} className="flex items-center gap-4">
        <Image
          src={ele.url}
          alt=""
          width={64}
          height={64}
          className="size-16 rounded object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">{ele.name}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Size:</dt>
              <dd className="inline">xl</dd>
            </div>

            <div>
              <dt className="inline">Color:</dt>
              <dd className="inline">black</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <div className='h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center  mt-2  text-gray-600'>
1
          </div>

          <button className="text-gray-600 transition hover:text-red-600" onClick={()=>{deleteItem(ele.id)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </li>
    )
      })} 
    </ul>

    <div className="space-y-4 text-center">
      <Link
        href="/Cart"
        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({data.length})
      </Link>
    </div>
  </div>
</div>
</div>
     



    }
</header>
  )
}

export default Header