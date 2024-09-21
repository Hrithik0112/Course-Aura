import CategoryList from '@/app/_shared/CategoryList'
import { UserInputContext } from '@/app/context/UseInputContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const SelectCategory = () => {

    const {userCourseinput, setUserCourseinput} = useContext(UserInputContext)

    function handleCategoryChange(category : string){
        setUserCourseinput((prev : any) =>({
            ...prev,
            category : category,
        })
        )
    }
  return (
    <div className='grid grid-cols-3 gap-10 px-10 md:px-20'>
        {CategoryList.map((item,index) => 
        <div className={`flex flex-col p-5 border items-center hover:border-primary hover:bg-blue-50 rounded-xl ${userCourseinput?.category == item.name && "border-primary bg-blue-50"}`}
        onClick={()=> handleCategoryChange(item.name)}
        >
            <Image src={item.icon} alt='logo' width={80} height={80}/>
            <h2>{item.name}</h2>
        </div>)}
    </div>
  )
}

export default SelectCategory