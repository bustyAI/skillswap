import React from "react";
import Image from "next/image";

import { Icon } from "../ui";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { GiHood } from "react-icons/gi";

const HeroCardRight: React.FC = () => {
  return (
    <div className="relative z-0 w-1/2 overflow-hidden rounded-2xl bg-[#F4F5F3] p-8 my-8">
      {/* Card wrapper */}
      <div className="relative mx-auto w-64">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* RIGHT SIDE CIRCLES */}

          {/* Large right circle */}
          <div className="absolute left-1/2 top-1/2">
            <div className="-translate-x-1/2 -translate-y-1/2">
              <div className="translate-x-28 -translate-y-28">
                <div className="h-80 w-80 rounded-full bg-[#FBC36A]" />
              </div>
            </div>
          </div>

          {/* Small right teal circle */}
          <div className="absolute left-1/2 top-1/2">
            <div className="-translate-x-1/2 -translate-y-1/2">
              <div className="translate-x-40 -translate-y-44">
                <div className="h-16 w-16 rounded-full bg-[#6BC6C4]" />
              </div>
            </div>
          </div>

          {/* LEFT SIDE CIRCLES */}

          {/* Medium left orange circle */}
          <div className="absolute left-1/2 top-1/2">
            <div className="-translate-x-1/2 -translate-y-1/2">
              <div className="-translate-x-36 -translate-y-16">
                <div className="h-32 w-32 rounded-full bg-[#FF8A3D]" />
              </div>
            </div>
          </div>

          {/* Small left accent circle */}
          <div className="absolute left-1/2 top-1/2">
            <div className="-translate-x-1/2 -translate-y-1/2">
              <div className="-translate-x-48 translate-y-24">
                <div className="h-10 w-10 rounded-full bg-orange-400/80" />
              </div>
            </div>
          </div>
        </div>

        {/* White card */}
        <div className="relative z-10 flex w-64 flex-col rounded-xl bg-white p-8 shadow-sm">
          <div className="flex flex-row justify-between">
            <Icon className={""} Icon={IoIosArrowBack} size={28} />
            <Icon className={""} Icon={FaRegBell} size={28} />
          </div>

          <div className="my-8">
            <h1 className="text-2xl font-bold">Find a mentor for you</h1>
            <p className="my-2 italic text-gray-500">
              Engage with people who have real world experience
            </p>
          </div>

          {/* Rotated card */}
          <div className="m-auto flex h-72 w-56 rotate-22 flex-col rounded-2xl bg-sky-100">
            <div className="m-auto flex h-72 w-56 -rotate-30 flex-col items-center rounded-2xl bg-white shadow-xl shadow-gray-500">
              <div className="my-4 h-24 w-24 rounded-full bg-[#6BC6C4]">
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
                <p className="italic text-gray-500">Software Engineer</p>
              </div>

              <div className="my-4 h-16 w-16 rounded-lg bg-black">
                <Icon
                  className="mx-auto my-2 h-12 w-12 text-white"
                  Icon={GiHood}
                  size={28}
                />
              </div>
            </div>
          </div>

          <div className="mx-auto my-8 w-full">
            <button className="w-full rounded-2xl bg-[#FF7A2F] p-4 text-white">
              Find a Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardRight;
