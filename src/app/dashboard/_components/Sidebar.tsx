"use client";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HiMiniPower,
  HiOutlineHome,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";

const Sidebar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiMiniPower />,
      path: "/dashboard/logout",
    },
  ];
  const path = usePathname();
  return (
    <div className="fixed h-full md:w-64 shadow-md p-5">
      <Image src="./logo.svg" alt="log" width={80} height={80} />
      <hr className="my-5" />
      <ul>
        {Menu.map((item) => (
          <Link href={item.path} key={item.id}>
            <li
              className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-purple-50 hover:text-black mb-3 ${
                item.path == path && "bg-purple-100 text-purple-800"
              } `}
            >
              <div className="text-2xl">{item.icon}</div>
              <h3>{item.name}</h3>
            </li>
          </Link>
        ))}
      </ul>
      <div className="absolute bottom-10 w-[80%]">
      <Progress value={33} />
      <h2 className="text-sm my-2">3 out of 5 Courses</h2>
        <p className="text-xs text-gray-500">Upgrade your plan to Unlimited Course generation.</p>
      </div>
    </div>
  );
};

export default Sidebar;
