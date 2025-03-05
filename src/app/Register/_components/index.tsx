"use client";

import Image from "next/image";
import Register from "./form";

export default function RegisterComp() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full pt-4 md:-mt-10">
      <div className="flex-1 md:flex items-center">
        <div className="text-white md:mx-24 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Post Your Story</h1>
          <p>Register so you can share your wonderful stories</p>
          <Image src={"signup.svg"} alt="image-reg" width={500} height={500} />
        </div>
      </div>
      <div className="flex-1 flex items-center -mt-50 md:mt-0">
        <div className="bg-white md:mx-14 w-full rounded-xl p-2 md:p-8">
          <p className="text-xl font-bold">Sign Up Now</p>
          <Register />
        </div>
      </div>
    </div>
  );
}
