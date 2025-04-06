"use client";
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

type Props = {
    name : string,
    image : StaticImageData,
    text : string,
    rate : number 
}

interface StartRatingProps {
    rating : number 
}

const StarRating = ({rating}:StartRatingProps)=>{
    const stars = Array.from({length : rating}).map((_,index)=>(
        <FaStar
        key={index} 
        className={`w-6 h-6 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        />
    ))
    return <div className='flex items-center mt-6'>{stars}</div>;
}


const Card = ({name,image,text,rate}:Props) => {
  return (
    <div className=' w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg'>
        <div>
            <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8'/>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-5 gap-5 items-center'>
            <div className=' col-span-3 order-2 lg:order-1'>
                <p className='mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]'>
                   {text}
                </p>
                <div className=' flex items-center mt-6'>
                   <StarRating rating={rate}/>
                </div>
                <h2 className=' text-xl font-semibold mt-8'>{name}</h2>
                <p className=' mt-2 text-lg text-gray-300'>FullStack Web</p>
            </div>
            <div className=' col-span-2 mx-auto order-1 lg:order-2 '>
                <Image src={image} alt= {name} width={250} height={120} className=' rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default Card