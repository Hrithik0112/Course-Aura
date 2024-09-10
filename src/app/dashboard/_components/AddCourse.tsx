"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const AddCourse = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl">
          Hello, <span className="font-bold">{user?.fullName}</span>{" "}
        </h2>
        <p className="text-base text-gray-500">
          Create Courses with AI, share with your friends and earn from it.
        </p>
      </div>
      <Link href={"/create-course"}>
        <Button>+ Create AI Course</Button>
      </Link>
    </div>
  );
};

export default AddCourse;
