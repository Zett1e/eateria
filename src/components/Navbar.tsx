import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute left-0 top-0 z-10 flex justify-between items-center px-20 pt-5 w-full'>
        <div>
            <h1 className='text-3xl font-bold'>Eateria</h1>
        </div>
        <div className='space-x-5 font-medium uppercase'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Menu</Link>
            <Link href={'/'}>Order</Link>
            <Link href={'/'}>Book</Link>
        </div>
    </div>
  )
}

export default Navbar