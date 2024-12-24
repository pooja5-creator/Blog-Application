
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BioContext } from './ThemeContext';
import manPhoto from '../assets/man-user.png'
export default function ItemOfBlog() {
  const [theme,setTheme]=useContext(BioContext)
  const [loadingData,setLoadingData]=useState(false)
    const [data, setData] = useState([]);
   const [visibleData,setVisibleData]=useState([])
   const [itemShow,setItemShow]=useState(3)
  
   
    
   useEffect(()=>{
    
     fetch("/api/v1/blogs",{
      method:'GET'
     })
     .then((res)=>res.json())
     .then(data=>{ 
      console.log(data);
      const getData=data.blogs
      setData(getData)
      setVisibleData(getData.slice(0,3))
     })
    },[])
   
    const handleInfinitiveScroll=()=>{
      try{
      if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
     setItemShow((pre)=>pre+5)
    }
  }
 catch{

 }
    }
    useEffect(()=>{
      setVisibleData(data.slice(0,itemShow))
    },[itemShow,data])

    useEffect(()=>{
      window.addEventListener('scroll',handleInfinitiveScroll)
    },[])
    
    const MoreLoadData=()=>{
      if(visibleData.length>=data.length) return
      const nextItems=data.slice(visibleData.length,visibleData.length+ItemPerPage)
      setVisibleData((pre)=>[...pre,...nextItems])
    }



  return (
  <>
   {!data?<p className='text-red-400 text-[30px] text-center'>loading</p>:
    <div className={`max-w-[100vw]  min-h-screen pb-[100px]  flex justify-center items-center
     flex-col ${!theme?'themeColor':''} `}>
      <div className='w-[90vw] min-h-[80vh]  flex justify-start items-center flex-col pt-[50px] gap-5 '>
    {visibleData.map((item) => (
      
      <Link to={`/slug/${item.slug}`} className=' '>
        <div key={item.slug} className='Container w-[90vw] md:w-[700px] min-h-[300px]
         overflow-hidden flex justify-center items-center md:justify-start
         md:items-start gap-1 md:gap-4 flex-col md:flex-row '>
       <div className=' h-[250px] w-[100%] md:w-[50%] imageContainer relative'> <img className='img h-[100%] w-[100%] ' src={item.image_path} alt="" />
       <div className='overlayBox w-full h-full absolute top-0 left-0 '></div>   </div>    
          <div className='text-center md:text-left p-2 pt-5 md:pt-[50px] md:w-[50%] '>  <h1 className='text-red-400 text-[20px] md:text-[25px] leading-none font-bold'> {item. title}</h1> 
         <span className='flex justify-center md:justify-start items-center pt-1 md:pt-3'> <img className='w-4 h-4 ' src={manPhoto} alt="" />
         <p className='text-gray-600 font-semibold text-[16px] md:text-[20px]'>:{item.author}</p> </span>
            <p className='text-[14px] pt-1 text-blue-300'><span className='text-gray-900'><i className="fa-regular fa-calendar-days"></i></span>&nbsp; {item.created_at}</p>
            </div> 
            </div>
            </Link> 
     
    ))}
    </div>
  </div>}
  </>
  )
}
