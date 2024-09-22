import React from 'react'
import { HiOutlineChartBar , HiOutlineClock, HiOutlineBookOpen,HiOutlinePlayCircle } from 'react-icons/hi2'

const CourseDetails = ({course} : {course : any}) => {
  return (
    <div className='border p6 rounded-xl shadow-sm mt-3'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            <div className='flex gap-2'>
                <HiOutlineChartBar/>
                <div>
                    <h2 className='text-xs text-gray-500'>Skill Level</h2>
                    <h2 className='font-medium text-lg'>{course?.level}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <HiOutlineClock/>
                <div>
                    <h2 className='text-xs text-gray-500'>Duration</h2>
                    <h2 className='font-medium text-lg'>{course?.courseOutput?.duration}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <HiOutlineBookOpen/>
                <div>
                    <h2 className='text-xs text-gray-500'>No of Chapters</h2>
                    <h2 className='font-medium text-lg'>{course?.courseOutput?.noOfChapters}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <HiOutlinePlayCircle/>
                <div>
                    <h2 className='text-xs text-gray-500'>Video Included?</h2>
                    <h2 className='font-medium text-lg'>{course?.includeVideo}</h2>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CourseDetails