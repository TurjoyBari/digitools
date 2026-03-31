import React from "react";

const countdown = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none  text-white pt-15 pb-15 ">
      <div className="flex items-center justify-around max-w-7xl mx-auto w-full">
        <div className="  place-items-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-extrabold text-6xl ">50K+</h1>
            <p className="">Active Users</p>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="  place-items-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-extrabold text-6xl ">200+</h1>
            <p>Premium Tools</p>
          </div>
        </div>
        <div className="divider 5 divider-horizontal"></div>
        <div className="  place-items-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-extrabold text-6xl ">4.9</h1>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default countdown;
