"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import img from "../Images/images.png"
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Review = () => {
  return (
    <div id='review' className=' pt-16 pb-16 bg-[#fcf6fa]'>
        <h2 className=' mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>What client say about us</h2>
        <div className=' mt-20 w-[90%] md:w-[80%] mx-auto'>
            <Carousel 
               responsive={responsive}
               arrows = {true}
               autoPlay = {true} 
               autoPlaySpeed={5000}
               showDots = {true}
               infinite={true}
            >
                <Card name = "test" image = {img}/>
                <Card name = "test" image = {img}/>
                <Card name = "test" image = {img}/>
                <Card name = "test" image = {img}/>
            </Carousel>
        </div>
    </div>
  )
}

export default Review