import React, { useContext } from "react";
import { useState } from "react";
import Markdown from "react-markdown";
import axios from "axios";
import { BioContext } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
export default function PostBlog() {
  const navigate=useNavigate()
  const [theme,setTheme]=useContext(BioContext)
  const [content, setContent] = useState('');
  const [title,setTitle]=useState('')
   const [slug,setslug]=useState('')
 const goHome=()=>{
  navigate('/')
 }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const postData={
       title,
       slug,
       content
      }
      console.log(postData);
    fetch("/api/v1/blogs",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }).then((res)=>{
      if(!res.ok){
        throw new Error("failed to post data")
        
      }
      return res.json()
    })
    .then(data=>console.log(data))
    .catch(err=>{
      console.log("Error happen here");
    })
}
  return (
    <>
      <div className={`max-w-full min-h-[90vh] pb-[50px]  flex justify-center items-center flex-col gap-5 ${!theme?'PostThemeColor':''}`}>
        <div className="w-full bg-zinc-900  min-h-[200px] flex justify-center items-center flex-col">
        <div className="w-full md:w-[80%] xl:w-[100%] min-h-[200px] flex justify-center items-center flex-col p-3">
          <h1 className="text-red-300 uppercase font-bold text-[18px] sm:text-[22px] md:text-[25px] text-center pt-2">"Unlock the Secrets of Our Latest Blog Post – Your Guide to Fresh Ideas and Inspiration!"
            </h1>
            <p className="xl:w-[50%] md:w-[70%] w-[90%] text-center pt-1 font-semibold text-[15px] sm:text-[18px] text-gray-200">Dive into our latest post for valuable insights and practical tips. Whether you’re seeking inspiration or expert advice, this post has something for you. Enjoy the read!</p></div>
            </div>

        <form
          action=""
          className={`${!theme?'formThemeColor':'bg-gray-200'} rounded-[15px]  
           w-[90vw] xl:w-[70vw]   m-2 min-h-[500px] py-4  xl:pl-10 px-3
             flex justify-start flex-col gap-4 items-start `} 
          onSubmit={handleSubmit}
        >
          <div className="xl:w-[90%] w-full flex flex-col ">
            {" "}
            <label htmlFor="" className="font-semibold text-[18px]">Title</label>
            <input
             required
              type="text" 
              className=" bg-zinc-700 py-2 px-3 text-gray-200 w-full py-3 rounded-md focus:ring  focus:ring-red-600"
              name='title' value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
           <div className="xl:w-[90%] w-full flex flex-col ">
            {" "}
            <label htmlFor="" className="font-semibold text-[18px]">Slug</label>
            <input
             required
              type="text" 
              className=" bg-zinc-700 py-2 px-3 text-gray-200 w-full  rounded-md focus:ring  focus:ring-red-600"
              name='slug' value={slug}
              onChange={(e)=>setslug(e.target.value)}
            />
          </div>
          <div className=" xl:w-[90%] w-full ">
            <div className="flex justify-center items-start flex-col  gap-4">

             <div className=" w-full "> <label htmlFor="" className="font-semibold text-[18px]">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full py-2 px-3 text-gray-200 bg-zinc-700   min-h-[200px] focus:ring  focus:ring-red-600 
                rounded-md"
              ></textarea>
              </div>
              <div className=" w-full "><label className="font-semibold text-gray-600" >Preview</label>
              <div className="bg-gray-800 py-2 px-3 text-gray-200 w-full  min-h-[200px]
               rounded-md text-[18px] ">
                <Markdown>{content}</Markdown>
              </div>
              </div>
            </div>
          </div>
          <div className=" w-[90%] flex justify-center items-center " onClick={goHome}><button className="px-6 py-2 bg-cyan-800 text-[20px] font-semibold text-red-300 rounded-md hover:bg-slate-400 hover:text-black">Save</button></div>
        </form>
      </div>
    </>
  );
}
