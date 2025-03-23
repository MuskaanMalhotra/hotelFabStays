"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
  const path=usePathname()
  return (
    <div className='flex justify-between items-center px-28 py-4 shadow-xl bg-white'>
        <div className='flex items-center gap-2'>
          <Image className='h-15 w-15' src={"/logo.png"} width={1000} height={1000} alt='logo'/>
            <h1 className='text-4xl font-serif font-extralight'>Hotel Fab Stays</h1>
        </div>
        <div className='flex gap-5 text-2xl font-light'>
            <Link href={'/'} className={`hover:bg-[#cdb97c] py-1 hover:text-white  px-3 ${path==="/"?'bg-[#cdb97c] text-white':''}`}>Home</Link>
            <Link href={'/aboutus'} className={`hover:bg-[#cdb97c] py-1 hover:text-white  px-3 ${path==="/aboutus"?'bg-[#cdb97c] text-white':''}`}>About</Link>
            
            <Link href={'/contactus'}  className={`hover:bg-[#cdb97c] py-1 hover:text-white  px-3 ${path==="/contactus"?'bg-[#cdb97c] text-white':''}`}>Contact</Link>
            <Link href={'/booknow'} className={`hover:bg-[#cdb97c] py-1 hover:text-white  px-3 ${path==="/booknow"?'bg-[#cdb97c] text-white':''}`}>Book Now</Link>
        </div>
    </div>
  )
}

export default Header