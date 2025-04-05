import React from 'react'
import { FaCog, FaDesktop, FaHeadset, FaInfinity, FaLaptop, FaLayerGroup, FaMobile } from 'react-icons/fa'

const Feature = () => {
    const features = [
        {
            icon : <FaLayerGroup className=' text-red-500'/>,
            text : "50+ Unique Design Block"
        },
        {
            icon : <FaLaptop className=' text-blue-500'/>,
            text : "Multiple layouts"
        },
        {
            icon : <FaMobile className='text-yellow-500'/>,
            text : "Mobile layouts"
        },
        {
            icon : <FaDesktop />,
            text : "Laptop layouts"
        },
        {
            icon : <FaCog />,
            text : "Customizable Features"
        },
        {
            icon : <FaHeadset />,
            text : "Humanly Support"
        },
        {
            icon : <FaInfinity />,
            text : "Lifetime update"
        },
    ]
  return (
    <div id='feature' className=' bg-pink-50 pt-20 pb-20'>
        <div className=' w-[80%] mx-auto text-center'>
            <h2 className=' mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
                It&apos;s everyting you&apos;ll need
            </h2>
            <div className=' grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    features.map((feature, index) => {
                        return (
                            <div key={index} className=' flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3'>
                                <div className=' text-3xl w-14 h-14 bg-gray-800 flex items-center justify-center flex-col rounded-full'>
                                    <span>{feature.icon}</span>
                                </div>
                                <span>{feature.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Feature