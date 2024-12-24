import React, { useContext, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { BioContext } from './ThemeContext'

export default function Header() {
  const [theme,setTheme]=useContext(BioContext)
  const [show,setShow]=useState(false)
 
  return (
   <header className='max-w-[100vw] h-[50px] bg-zinc-800  p-2 sticky top-0 z-10'>
  <div className='flex justify-between px-3 md:px-10 sm:justify-around items-center w-full h-full relative'>
    <h1> <span className='text-3xl font-semibold text-orange-500'>B</span>
    <span className='text-yellow-300 text-3xl font-semibold'>l</span>
    <span className='text-green-300 text-3xl font-semibold'>o</span>
    <span className='text-red-300 text-3xl font-semibold'>g</span>
    <span className='text-gray-600 text-3xl font-semibold'>g</span>
    <span className='text-blue-600 text-3xl font-semibold'>i</span>
    <span className='text-pink-500 text-3xl font-semibold'>n</span>
    <span className='text-cyan-300 text-3xl font-semibold'>g</span></h1>
  <div className='hidden sm:flex justify-center items-center gap-3  font-semibold text-[20px]  text-pink-800 
  '>  <NavLink to="/" className={(e)=>e.isActive?'red':''}>Home</NavLink>
    <NavLink to="/about" className={(e)=>e.isActive?'red':''}>About</NavLink>
    <NavLink to="/contact" className={(e)=>e.isActive?'red':''}>Contact</NavLink>
    <NavLink to="/postBlog" className={(e)=>e.isActive?'red':''}>New</NavLink>

    
    </div>
    <div className='cursor-pointer w-[40px]  h-[40px] hidden sm:block'onClick={()=>setTheme(!theme)}>
      <span className='w-full text-[25px] px-2'><i className={`fa-solid fa-${theme?'sun':'moon'}`}></i></span></div>
      <div onClick={()=>{setShow(true)}} className='transition-all duration-1000 ease-in-out   block sm:hidden cursor-pointer hover:text-zinc-700 '><span className='menu_bar text-[23px] font-bold '><i className="fa-solid fa-bars"></i></span>
     
      </div>
      { show&&
      (<div className={`side_bar bg-zinc-600 w-[300px] h-[300px] z-20 absolute top-2 ${show?'right-3':'-right-[300px]'} 
      rounded-[10px] p-5 flex justify-start items-start flex-col gap-2 font-semibold text-[18px]
        `}>
      <span className=' text-[23px]' onClick={()=>setShow(false)}><i className="fa-solid fa-xmark"></i></span>
      <NavLink to="/" className={(e)=>e.isActive?'red':''}>Home</NavLink>
    <NavLink to="/about" className={(e)=>e.isActive?'red':''}>About</NavLink>
    <NavLink to="/contact" className={(e)=>e.isActive?'red':''}>Contact</NavLink>
    <NavLink to="/postBlog" className={(e)=>e.isActive?'red':''}>New</NavLink>


      </div>)
}
    
      </div>
   </header>
  )
}
