import React from 'react'
import Card from './Card'

const Price = () => {
  return (
    <div id='price' className=' pt-16 pb-16 bg-[#edfbff] '>
        <h2 className=' mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Price</h2>
        <div className='w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <Card price = {15} plan = "starter"/>
            </div>
            <div>
                <Card price = {45} plan = "Business"/>
            </div>
        </div>
    </div>
  )
}

export default Price