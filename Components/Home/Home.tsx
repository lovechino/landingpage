import React from 'react'
import Welcome from './Welcome/Welcome'
import Choose from './WhyChoose/Choose'
import Feature from './Feature/Feature'
import Review from './Review/Review'
import Price from './Price/Price'
import Footer from './Footer/Footer'
import { GetReview } from './Review/GetData'





const HomePage = async () => {
  const data = await GetReview()
  return (
    <div className=' overflow-hidden'>
      <Welcome />
      <Choose/>
      <Feature/>
      <Review results={data}/>
      <Price />
      <Footer/>
    </div>
  )
}

export default HomePage