"use client";
import { Button } from "@/components/ui/button";
import { Icon, TrendingUp } from "lucide-react";
import React, { useContext, useState } from "react";
import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../context/UseInputContext";
import { GenerateBasicCourselayout_AI } from "@/configs/AiModel";
import LoadingDialouge from "./_components/LoadingDialouge";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useRouter } from "next/navigation";

const CreateCourse = () => {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { userCourseinput, setUserCourseinput } = useContext(UserInputContext);

  const { user } = useUser();
  const router = useRouter()
  function checkStatus() {
    if (userCourseinput?.length == 0) {
      return true;
    }
    if (
      activeIndex == 0 &&
      (userCourseinput?.category?.length == 0 || userCourseinput?.category == undefined)
    ) {
      return true;
    }

    if (
      activeIndex == 2 &&
      (userCourseinput?.level == undefined ||
        userCourseinput?.duration == undefined ||
        userCourseinput?.displayVideo == undefined ||
        userCourseinput?.noOfChapter == undefined)
    ) {
      return true;
    } else {
      return false;
    }
  }
  const GenerateCourseLayout = async () => {
    setLoading(true);
    const BASIC_PROMPT =
      "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration:";

    const USER_INPUT_PROMPT =
      "Category: " +
      userCourseinput?.category +
      ", Topic: " +
      userCourseinput?.topic +
      ", Level: " +
      userCourseinput?.level +
      ", Duration: " +
      userCourseinput?.duration +
      ", NoOf Chapters:" +
      userCourseinput?.noOfChapter +
      ", in JSON format";

    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
    console.log(FINAL_PROMPT);
    const res = await GenerateBasicCourselayout_AI.sendMessage(FINAL_PROMPT);
    const responseText = await res.response.text(); // Await the text
    console.log("Raw Response Text:", responseText);

    // Check if the response contains any unexpected characters
    const cleanResponseText = responseText.replace(/```json|```/g, ""); // Remove any markdown code blocks
    console.log("Cleaned Response Text:", cleanResponseText);

    const jsonResponse = JSON.parse(cleanResponseText); // Parse the cleaned text
    console.log("Parsed JSON Response:", jsonResponse);
    setLoading(false);
    SaveCourseLayoutInDb(jsonResponse)
  };

  const SaveCourseLayoutInDb = async (courseLayout: any) => {
    var id = uuid4(); // course ID
    setLoading(true);
    const result = await db.insert(CourseList).values({
      courseId: id,
      name: userCourseinput?.topic || '',  // Provide a default value if undefined
    level: userCourseinput?.level || '',  // Provide a default value if undefined
    category: userCourseinput?.category || '',  // Provide a default value if undefined
    courseOutput: courseLayout,
    createdBy: user?.primaryEmailAddress?.emailAddress!,  // Provide a default value if undefined
    userName: user?.fullName || undefined,  // This field is optional in the schema, so undefined is okay
    userProfileImage: user?.imageUrl || undefined,  // This field is optional in the schema, so undefined is okay
    });
    console.log("Finished")
    router.replace('/create-course/'+ id)
    setLoading(false)
  };
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
                    activeIndex - 1 >= index && "bg-purple-500"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {/* component  */}
        {activeIndex == 0 ? (
          <SelectCategory />
        ) : activeIndex == 1 ? (
          <TopicDescription />
        ) : activeIndex == 2 ? (
          <SelectOption />
        ) : null}
        {/* next and prevous button */}
        <div className="flex justify-between mt-10">
          <Button disabled={activeIndex == 0} onClick={() => setActiveIndex(activeIndex - 1)}>
            Previous
          </Button>
          {activeIndex < StepperOptions?.length - 1 && (
            <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>
              Next
            </Button>
          )}

          {activeIndex == StepperOptions?.length - 1 && (
            <Button disabled={checkStatus()} onClick={() => GenerateCourseLayout()}>
              Generate Course layout
            </Button>
          )}
        </div>
      </div>
      <LoadingDialouge loading={loading} />
    </div>
  );
};

export default CreateCourse;
