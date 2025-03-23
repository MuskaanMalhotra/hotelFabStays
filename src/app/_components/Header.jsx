"use client"
import { AlignJustify, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Header = () => {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  
  return (
    <div className='relative flex justify-between items-center px-5 lg:px-28 lg:py-4 py-2 shadow-xl bg-white'>
        <div className='flex items-center gap-2'>
          <Image className='h-15 w-15' src={"/logo.png"} width={1000} height={1000} alt='logo'/>
          <h1 className='text-xl whitespace-nowrap lg:text-4xl font-serif font-extralight'>Hotel Fab Stays</h1>
        </div>
        <div className='hidden lg:flex gap-5 text-2xl font-light'>
            <Link href={'/'} className={`hover:bg-[#cdb97c] py-1 hover:text-white px-3 ${path==="/"?'bg-[#cdb97c] text-white':''}`}>Home</Link>
            <Link href={'/aboutus'} className={`hover:bg-[#cdb97c] py-1 hover:text-white px-3 ${path==="/aboutus"?'bg-[#cdb97c] text-white':''}`}>About</Link>
            <Link href={'/contactus'} className={`hover:bg-[#cdb97c] py-1 hover:text-white px-3 ${path==="/contactus"?'bg-[#cdb97c] text-white':''}`}>Contact</Link>
            <Link href={'/booknow'} className={`hover:bg-[#cdb97c] py-1 hover:text-white px-3 ${path==="/booknow"?'bg-[#cdb97c] text-white':''}`}>Book Now</Link>
        </div>
        <div className='flex lg:hidden cursor-pointer' onClick={()=>setOpen(!open)}>
          {open ? <Plus className='rotate-45'/> : <AlignJustify/>}
        </div>
        <Sidebar open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Header