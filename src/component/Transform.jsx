import React from "react";
import { Play } from "lucide-react";

const Transform = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none  text-white pt-15 pb-15 ">
      <div className="flex flex-col items-center justify-around max-w-7xl mx-auto w-full">
        {/* <div className="  place-items-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-extrabold text-6xl ">50K+</h1>
            <p className="">Active Users</p>
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-center text-center gap-4 pb-10 pt-30 ">
          <h1 className="font-extrabold text-5xl text-white">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-[#bec6ce] pt-4">
            Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn  border-[#9514FA] rounded-full transition-all px-8 py-4  font-semibold text-[16px] shadow-xl shadow-primary/30 flex items-center gap-3 group text-[#9514FA]">
              <span className="group-hover:translate-x-1 transition"><Play/></span>
              Explore Products
            </button>
            
            <button className="btn border-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border rounded-full transition-all px-8 py-4  font-semibold text-[16px] shadow-xl shadow-primary/30 flex items-center gap-3 group text-white">
              View Pricing
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
          <p className="text-[#bec6ce] pt-6">
            14-day free trial • No credit card required • Cancel anytime
          </p>
      </div>
    </div>
  );
};

export default Transform;
