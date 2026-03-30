import { Play } from "lucide-react";
import BannerImage from "../assets/banner.png";
import GroupImage from "../assets/group.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF]  text-sm font-medium px-5 py-2 rounded-full">
            <img src={GroupImage} alt="" /> <span className=" bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your

            <br />
            
            Digital Workflow
            
          </h1>

          <p className="text-lg text-[#627382] max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full transition-all px-8 py-4  font-semibold text-[16px] shadow-xl shadow-primary/30 flex items-center gap-3 group text-white">
              Explore Products
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
            <button className="btn  border-[#9514FA] rounded-full transition-all px-8 py-4  font-semibold text-[16px] shadow-xl shadow-primary/30 flex items-center gap-3 group text-[#9514FA]">
              <span className="group-hover:translate-x-1 transition"><Play/></span>
              Watch Demo
            </button>
          </div>

          {/* <div className="flex items-center gap-8 text-sm text-zinc-600 pt-6">
            <div>✓ 50+ Frontier Models</div>
            <div>✓ No Usage Limits</div>
            <div>✓ Cancel Anytime</div>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;