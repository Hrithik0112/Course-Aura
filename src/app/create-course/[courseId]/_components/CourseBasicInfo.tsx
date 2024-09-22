import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { HiOutlinePuzzle } from "react-icons/hi";

const CourseBasicInfo = ({course} : {course : any}) => {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
                <h2 className='font-bold text-3xl'>{course?.courseOutput?.courseName
                }</h2>
                <p className='text-sm text-gray-400 mt-3'>{course?.courseOutput?.description}</p>
                <h2 className='font-medium gap-2 items-center flex mt-2'><HiOutlinePuzzle/>{course?.category}</h2>
                <Button className='w-full mt-5'>Start</Button>
            </div>
            
            <div>
                <Image src={'/placeholder.jpg'} alt="course image" width={300} height={300} className='w-full rounded-xl object-cover h-[250px]'/>

            </div>
        </div>
    </div>
  )
}

export default CourseBasicInfo