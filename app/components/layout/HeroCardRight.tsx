import React from "react";
import Image from "next/image";

import { Icon } from "../ui";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

const HeroCardRight: React.FC = () => {
  return (
    <div className="flex flex-col m-8 w-60 rounded-xl">
      <div className="flex flex-row justify-between">
        <Icon className={""} Icon={IoIosArrowBack} size={28} />
        <Icon className={""} Icon={FaRegBell} size={28} />
      </div>

      <div className="my-8">
        <h1 className="font-bold">Find a mentor for you</h1>
        <p className="my-2 italic text text-gray-500">
          Engage with people who have real world experience
        </p>
      </div>

      <div className=" flex flex-col -rotate-22 m-auto w-56 h-64 bg-sky-100 rounded-2xl">
        <div className="flex flex-col items-center rotate-22 m-auto w-56 h-64 bg-white rounded-2xl shadow-lg shadow-gray-400">
          <div className="rounded-full h-24 w-24 my-4 bg-red-500">
            <Image
              className="rounded-full"
              src={"/images/headshot.png"}
              alt="Smiling Person"
              width={100}
              height={100}
            />
          </div>
          <div>
            <p className="font-bold">Anthony Gonzalez</p>
            <p className="text-gray-500 italic">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardRight;
