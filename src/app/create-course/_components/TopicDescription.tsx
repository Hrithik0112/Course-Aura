import { UserInputContext } from '@/app/context/UseInputContext'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

const TopicDescription = () => {

    const {userCourseinput, setUserCourseinput} = useContext(UserInputContext)

    function handleInputChange (fieldName: string, value : string){
        setUserCourseinput((prev : any) =>({
            ...prev,
            [fieldName] : value,
        })
    )
    }
  return (
    <div className='mx-20 md:mx-44'>
        {/* input topic */}
        <div className='mt-5'>
            <label>Write the topic you want to generate the course (e.g. Python Coding, Yoga, etc.)</label>
            <Input placeholder='Topic' defaultValue={userCourseinput?.topic} onChange={(e)=>handleInputChange("topic", e.target.value)}/>
        </div>

        {/* topic description */}
        <div className='mt-5'>
            <label>Tell us more about your course, what you want want include in the course(Optional)</label>
            <Textarea placeholder='About The Course' defaultValue={userCourseinput?.description}  onChange={(e)=>handleInputChange("description", e.target.value)}/>
        </div>
    </div>
  )
}

export default TopicDescription