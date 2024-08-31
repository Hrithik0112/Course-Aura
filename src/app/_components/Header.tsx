import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-5 shadow-sm'>
        <div className='flex gap-2'>
        <p className='font-bold'>Course-Aura</p>
        <Image src="./logo.svg" alt='log' width={50} height={50}/>
        </div>
        <Button>Get started</Button>
    </div>
  )
}

export default Header