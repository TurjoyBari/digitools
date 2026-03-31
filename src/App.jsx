// import reactLogo from './assets/react.svg'

import "./App.css";
import Banner from "./component/Banner";
import NavBar from "./component/NavBar";
import CountDown from "./component/CountDown";
import Models from "./component/Models";
import Cart from "./component/Cart";
import { useState } from "react";


const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();




function App() {
  
  const [activeTab , setActiveTab] = useState("products")
  
  const [carts , setCarts] = useState([])
  

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <CountDown></CountDown>

      <div className="flex flex-col justify-center items-center text-center gap-4 pb-10 pt-30">
        <h1 className="font-extrabold text-5xl text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box gap-3 bg-transparent border-none justify-center items-center pb-10">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full pr-4 pl-4"
          aria-label="Products"
          onClick= {()=> setActiveTab("products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full pr-6 pl-6"
          aria-label={`Cart (${carts.length})`}
          onClick= {()=> setActiveTab("cart")}
          
        />
        
      </div>

      {activeTab == "products" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}

      {activeTab == "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
    </>
  );
}

export default App;
