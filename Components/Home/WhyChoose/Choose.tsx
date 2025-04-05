import React from 'react'
import Card from './Card'
import img from "../Images/img_avatar.png"
const Choose = () => {
  return (
    <div className=' pt-16 pb-16'>
        <h2 className=' mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Why you choose me</h2>
        <div className=' mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-12'>
                <Card image = {img} title = "Create Free Account" linkText = "Start"/>
                <Card image = {img} title = "Create Free Account" linkText = "Start"/>
                <Card image = {img} title = "Create Free Account" linkText = "Start"/>
                <Card image = {img} title = "Create Free Account" linkText = "Start"/>
        </div>
    </div>
  )
}

export default Choose