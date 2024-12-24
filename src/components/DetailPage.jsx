import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from "react-markdown";
import AuthorImg from '../assets/author_image.png'
import { BioContext } from './ThemeContext';

export default function DetailPage() {
  const [theme,setTheme]=useContext(BioContext)
    
      const {slug}=useParams()
    
    const [oneData,setOneData]=useState([])
    useEffect(()=>{
        fetch(`/api/v1/blogs/slug/${slug}`)
        .then(res=>res.json())
        .then(data=>setOneData(data.blog))
    },[])
  return (
<>
      <div className={`${!theme?'detailColortheme':'bg-gray-100'} pb-10 max-w-[100vw] 
      min-h-[100vh] flex justify-start pt-20 items-center flex-col`}>
        <div className='w-[90vw] md:w-[500px] h-[330px] rounded-2xl overflow-hidden'><img className='w-full h-full ' src={oneData.image_path}alt="" /></div>
        <h1 className='text-cyan-700 pt-3 text-[17px] md:text-[23px] font-bold'>{oneData.title}</h1>
       <div className='flex justify-between items-center w-[50%] md:w-[30%]  flex-col gap-1 lg:gap-2 lg:flex-row'> <p className='text-red-400 flex justify-center items-center
        gap-1 font-bold text-[18px]'><img className='w-7 h-7' src={AuthorImg} alt="" />
        {oneData.author}</p>
        <p className='text-zinc-400 font-semibold'><span className='text-blue-200 text-[20px]'><i className="fa-regular fa-calendar-days"></i> 
        </span>{oneData.created_at}</p></div>
        <div className='w-[90%] lg:w-[70%] pt-[10px] text-center'>
        <Markdown>{oneData.content}</Markdown>
    </div>
      </div>
   
    
     
    </>
  )
}
