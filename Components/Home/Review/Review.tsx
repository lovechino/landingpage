"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import img from "../Images/images.png"
import { Client } from "@notionhq/client"
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

  interface NotionPageItem {
    object: 'page';
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: {
      object: 'user';
      id: string;
    };
    last_edited_by: {
      object: 'user';
      id: string;
    };
    cover: null;
    icon: null;
    parent: {
      type: 'database_id';
      database_id: string;
    };
    archived: boolean;
    in_trash: boolean;
    properties: {
      Rating: {
        id: string;
        type: 'number';
        number: number | null; // Có thể là null nếu không có giá trị
      };
      Text: {
        id: string;
        type: 'rich_text';
        rich_text: {
          type: 'text';
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string; // Có thể có nhiều giá trị khác nhau, để string cho tổng quát
          };
          plain_text: string;
          href: null;
        }[];
      };
      Name: {
        id: string;
        type: 'title';
        title: {
          type: 'text';
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string; // Tương tự như Text
          };
          plain_text: string;
          href: null;
        }[];
      }
    };
    url: string;
    public_url: null;
  }

  interface ListItem {
    results : NotionPageItem[]
  }

const Review =  ({results} :ListItem) => {
  // results.map((item)=>console.log(item))
  // item.properties.Name.title[0].plain_text
  // item.properties.Text.rich_text[0].plain_text
//  const data = await GetReview()
//  console.log(data)
console.log(results)
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
               {/* <Card name='test' image={img}/>
               <Card name='test' image={img}/>
               <Card name='test' image={img}/>
               {
                results?.map((item,index)=>{
                  <Card key={index} name='dsdsd' image={img}/>
                })
               } */}
               {
              results.map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <Card image={img} name= { item.properties.Name.title[0].plain_text} text= {item.properties.Text.rich_text[0].plain_text} rate={item.properties.Rating.number}/>
              ))
            }
            </Carousel>
            
        </div>
       
    </div>
  )
}


export const GetReview = async ()=>{
    
  try{
      const notion = new Client({auth : "ntn_w20748058256ErM2tsTcuwnawmMawV7mDwJDsEOYL5mdos"})

  const databaseId = "1cd07bab064180988837dffbbf74cf9a"

  const response = await notion.databases.query({
      database_id: databaseId,
  })
  return response.results
  }catch(err){
      console.log(err)
  }
}

export default Review