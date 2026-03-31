import React from "react";
import User from "../assets/user.png";
import Package from "../assets/package.png";
import Rocket from "../assets/rocket.png";  

const Started = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center text-center gap-4 pb-10 pt-30">
        <h1 className="font-extrabold text-5xl text-[#101727]">
          Get Started in 3 Steps
        </h1>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="card grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center bg-base-100">
        <div className="card-body">
          <div className=" rounded-box shadow-lg  p-6">
            <div className=" flex justify-end">
              <div className=" rounded-full size-9 flex items-center text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[14px] font-bold">
                <p className="">01</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center text-center pb-18">
              <div className=" rounded-full p-3 bg-[#9614fa33]">
                <img src={User} alt="" />
              </div>
              <h2 className="font-bold text-2xl text-[]#101727">Create Account</h2>
              <p className="text-[#627382]">
                Sign up for free in seconds. No credit card <br /> required to
                get started.
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className=" rounded-box shadow-lg  p-6">
            <div className=" flex justify-end">
              <div className=" rounded-full size-9 flex items-center text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[14px] font-bold">
                <p className="">02</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center text-center pb-18">
              <div className=" rounded-full p-3 bg-[#9614fa33]">
                <img src={Package} alt="" />
              </div>
              <h2 className="font-bold text-2xl text-[]#101727">Choose Products</h2>
              <p className="text-[#627382]">
                Browse our catalog and select the tools <br /> that fit your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className=" rounded-box shadow-lg  p-6">
            <div className=" flex justify-end">
              <div className=" rounded-full size-9 flex items-center text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[14px] font-bold">
                <p className="">03</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center text-center pb-18">
              <div className=" rounded-full p-3 bg-[#9614fa33]">
                <img src={Rocket} alt="" />
              </div>
              <h2 className="font-bold text-2xl text-[]#101727">Start Creating</h2>
              <p className="text-[#627382]">
                Download and start using your premium <br /> tools immediately.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Started;
