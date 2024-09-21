"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";
import React, { useState } from "react";
import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";

const CreateCourse = () => {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 1,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 1,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      {/* steeper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">Create</h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-gray-300 p-3 rounded-full text-white ${
                    activeIndex >= index && "bg-purple-500"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != StepperOptions?.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] rounded-full bg-gray-300 ${
                    activeIndex - 1  >= index && "bg-purple-500"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {/* component  */}
        {activeIndex == 0 ? <SelectCategory/> : 
        activeIndex == 1? <TopicDescription/> : 
        activeIndex == 2 ? <SelectOption/> : null}
        {/* next and prevous button */}
        <div className="flex justify-between mt-10">
          <Button disabled={activeIndex == 0} onClick={() => setActiveIndex(activeIndex - 1)}>
            Previous
          </Button>
          {activeIndex < StepperOptions?.length - 1 && <Button onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>}

          {activeIndex == StepperOptions?.length - 1 && (
            <Button onClick={() => setActiveIndex(activeIndex + 1)}>Generate Course layout</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
