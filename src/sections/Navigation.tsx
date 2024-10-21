import { ModeToggle } from '@/components/global/mode-toggle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image 
          src={'/assets/company-logo.svg'}
          width={40}
          height={40}
          alt="company logo"
        />
        <span className="text-xl font-bold">Company.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] 
      transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8 capitalize">
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About Us</Link>
          <Link href={'#'}>Services</Link>
          <Link href={'#'}>Portfolio</Link>
        </ul>
      </nav>
      <aside className='flex gap-2 items-center'>
        <Link
          href={'contact'}
          className='hidden md:block bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80'
        >
          Get a Quote
        </Link>
        <ModeToggle />
      </aside>
    </div>
  )
}

export default Navigation
