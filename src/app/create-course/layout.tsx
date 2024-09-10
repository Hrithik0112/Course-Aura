import React from 'react'
import Header from '../dashboard/_components/Header'

const CreateCourselayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default CreateCourselayout