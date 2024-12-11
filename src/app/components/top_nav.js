"use client";

import { redirect } from "next/navigation";

const TopNavBar = () => {

  const onLogoClick = () => {
    redirect('/');
  }

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-[#0e0e0e] text-white flex justify-between items-center px-6 z-50">
      <div className="font-manbow_solid text-4xl hover:cursor-pointer" onClick={onLogoClick}>PA</div>
      {/* <div>Signup</div> */}
    </div>
  );
};

export default TopNavBar;