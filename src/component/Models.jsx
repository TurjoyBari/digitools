import React, { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);
  console.log(models);

  return (
    <div className="pt-30">
      <div className="flex flex-col justify-center items-center text-center gap-4 pb-10">
        <h1 className="font-extrabold text-5xl text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center gap-7 ">
        {models.map((model) => (
          <ModelCard model = {model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;
