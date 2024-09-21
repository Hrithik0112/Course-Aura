import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TopicDescription = () => {
  return (
    <div className='mx-20 md:mx-44'>
        {/* input topic */}
        <div className='mt-5'>
            <label>Write the topic you want to generate the course (e.g. Python Coding, Yoga, etc.)</label>
            <Input placeholder='Topic'/>
        </div>

        {/* topic description */}
        <div className='mt-5'>
            <label>Tell us more about your course, what you want want include in the course(Optional)</label>
            <Textarea placeholder='About The Course'/>
        </div>
    </div>
  )
}

export default TopicDescription