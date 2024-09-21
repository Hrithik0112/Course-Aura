"use client"
import React, { useState } from "react";
import Header from "../dashboard/_components/Header";
import { UserInputContext } from "../context/UseInputContext";

const CreateCourselayout = ({ children }: { children: React.ReactNode }) => {
  const [userCourseinput, setUserCourseinput] = useState([]);
  return (
    <div>
      <UserInputContext.Provider value={{ userCourseinput, setUserCourseinput }}>
        <Header />
        {children}
      </UserInputContext.Provider>
    </div>
  );
};

export default CreateCourselayout;
