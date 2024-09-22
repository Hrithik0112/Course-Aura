import React from "react";
import { HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi2";

const ChapterList = ({ course }: { course: any }) => {
  return (
    <div className="mt-3">
      <h2 className="font-medium text-xl">Chapters</h2>
      <div>
        {course?.courseOutput?.chapters.map((chapter: any, index: number) => (
          <div key={index} className=" border p-5 mb-2 rounded-lg flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <h2 className="bg-primary p-2 text-center size-10 flex-none text-white rounded-xl">
                {index + 1}
              </h2>
              <div>
                <h2 className="font-medium text-lg">{chapter?.name}</h2>
                <p className="text-sm text-gray-500">{chapter?.about}</p>
                <p className="flex gap-2 text-primary items-center">
                  <HiOutlineClock /> {chapter?.duration}
                </p>
              </div>
            </div>
            <HiOutlineCheckCircle className="text-4xl text-gray-300 flex-none"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
