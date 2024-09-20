import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React from 'react'

const SelectCategory = () => {
  return (
    <div className='grid grid-cols-3 gap-10 px-10 md:px-20'>
        {CategoryList.map((item,index) => 
        <div className='flex flex-col p-5 border items-center hover:border-primary hover:bg-blue-50 rounded-xl'>
            <Image src={item.icon} alt='logo' width={80} height={80}/>
            <h2>{item.name}</h2>
        </div>)}
    </div>
  )
}

export default SelectCategory