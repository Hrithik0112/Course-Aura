"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { resolve } from "path";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetails from "./_components/CourseDetails";
import ChapterList from "./_components/ChapterList";

const BasicCourseLayout = ({ params }: { params: any }) => {
  const { user } = useUser();

  const [course , setCourse] = useState<any>([])

  useEffect(() => {
    console.log(params);
    params && GetCourse()
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(and(eq(CourseList.courseId, params?.courseId), 
      eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress as string)));
    setCourse(result[0])
      console.log(result)
  };
  return <div className="mt-10 px-7 md:px-20 lg:px-44">
    <h2 className="font-bold text-center text-2xl">Course Layout</h2>
    {/* basic info */}
    <CourseBasicInfo course={course}/>
    {/* course details */}
    <CourseDetails course={course}/>
    {/* list of lesson */}
    <ChapterList course={course}/>
  </div>;
};

export default BasicCourseLayout;
