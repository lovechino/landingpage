import Image from 'next/image'
import React from 'react'
import img from "../Images/hinh-anh-IT-service-la-gi-2.jpg"
import ggplay from "../Images/images.png"
import appstore from "../Images/app-store-og-twitter.png"
const Welcome = () => {
  return (
    <div className=' w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
        <div className=' flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                <div>
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white'>
                        <div className=' px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white'>
                            News
                        </div>
                        <p className=' text-xs sm:text-sm'>We have news update</p>
                    </div>
                    <h2 className=' text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[5rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, provident.</h2>
                    <p className=' text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore alias quo ut beatae quos nulla odit et fugit commodi adipisci.</p>
                    <div className=' flex mt-2 mb-8 items-center space-x-4'>
                        <Image src={ggplay} alt='play' width={150} height={150} className=' object-contain'/>
                        <Image src={appstore} alt='play' width={300} height={300} className=' object-contain'/>
                    </div>
                </div>
                <div className=' hidden lg:block'>
                    <Image src= {img} alt='welcome' width={700} height={700}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome