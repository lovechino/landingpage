"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2'


const navLinks = [
  {
    id : 1,
    url : "#",
    label : "Home"
  },
  {
    id : 2,
    url : "#",
    label : "About"
  },
  {
    id : 3,
    url : "#feature",
    label : "Feature"
  },
  {
    id : 4,
    url : "#review",
    label : "Review"
  },
  {
    id : 5,
    url : "#price",
    label : "Price"
  },
  {
    id : 6,
    url : "#",
    label : "Contact"
  }
]
type Props = {
  openNav : ()=>void
}

const Navbar = ({openNav} : Props) => {
  const[navBg,setNavBg] = useState(false)
  useEffect(()=>{
    const handler = ()=>{
      if(window.scrollY >=90) setNavBg(true)
      if(window.scrollY < 90) setNavBg(false)
    }
  window.addEventListener('scroll',handler)
  return ()=>{
    window.removeEventListener('scroll',handler)
  }
  },[])
  const[open,setOpen] = useState(false)
  const setClose = ()=>{
    setOpen(false)
  }
  const LazyLoading = dynamic(()=>import("../Contact/Contact"),{
    loading : ()=>(
      <div className=' flex items-center justify-center h-32'>
        <FaSpinner className=' animate-spin text-4xl text-blue-500'/>
      </div>
    ),
    ssr: false
  })
  return (
    <div className={` fixed ${navBg ? "bg-white shadow-md" : " fixed"} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
        <div className=' flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
           <h1 className=' text-xl md:text-2xl font-bold'>
            <span className=' text-3xl md:text-4xl text-pink-700'>N</span>ame
            </h1>
            <div className=' hidden lg:flex items-center space-x-10'>
              {navLinks.map((item)=>{
                return (
                  item.label === "Contact" ? (
                     <div className=' hover:cursor-pointer' onClick={()=>setOpen(!open)}>Contact</div>
                  ) : (
                    <Link href= {item.url} key={item.id}><p className=''>{item.label}</p></Link>
                  )
                )
              })}
            </div>
            <div className=' flex items-center space-x-4'>
              <button onClick={()=>setOpen(!open)} className=' md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 rounded-2xl'>Join Now</button>
              <HiBars3BottomRight onClick={openNav} className=' w-8 h-8 cursor-pointer text-black lg:hidden'/>
            </div>
        </div>
       {open && <LazyLoading open = {open} setClose={setClose}/>}
      </div>
  )
}

export default Navbar