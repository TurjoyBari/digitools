import React, { useState } from "react";

const ModelCard = ({model}) => {
    const [isBuy , setIsBuy] = useState(false)

    const hendelBuy = () =>{
        setIsBuy(true)
    }

  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-lg ">
        <div className="card-body ">
          <div className="flex justify-between items-center">
            <div className=" p-1.5 border border-[#CCCCCC] rounded-full">
              <img src={model.icon} className="w-8 h-8 " alt="" />
            </div>
            <span className="badge badge-xs badge-warning">{model.tag}</span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#101727]">{model.name}</h2>
            <p className="text-[#627382]">{model.description}</p>
            <span>
              <span className="text-xl font-bold text-[#101727]">
                ${model.price}
              </span>
              <span className="text-[#627382]">/Mo</span>
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{model.features[0]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{model.features[1]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{model.features[2]}</span>
            </li>
          </ul>
          <div className="mt-6">
            <button onClick={hendelBuy} className="btn btn-primary btn-block bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white">
              {isBuy ? "Check Out" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
