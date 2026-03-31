import React from "react";
import { toast } from "react-toastify";
import CartEmpty from "../assets/Card.png";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);

    toast.success("Payement successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);

    toast.error("Item deleted!");
  };

  return (
    <div className="max-w-6xl mx-auto shadow-md border-[#F2F2F2] rounded-box border p-10 flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Your Cart</h1>
      {carts.length === 0 ? (
        
        <div className="flex items-center justify-center"><img className=" w-110 h-110" src={CartEmpty} alt="" /></div>
      ) : (
        <>
          {carts.map((item) => (
            <div className="">
              <div className=" rounded-box shadow-lg">
                <ul className="list bg-[#F9FAFC] rounded-box shadow-lg">
                  <li className="list-row flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div className="size-15 rounded-full bg-white flex items-center justify-center">
                        <img className="size-10  " src={item.icon} />
                      </div>
                      <div className="space-y-1">
                        <div className="font-semibold text-xl ">
                          {item.name}
                        </div>
                        <div className="text-xs  font-semibold opacity-60">
                          ${item.price}
                        </div>
                      </div>
                    </div>
                    <button onClick={() => handleDelete(item)} className="text-error">Remove</button>
                  </li>
                </ul>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <p>Total: </p>
            <p className="font-bold text-2xl">${totalPrice}</p>
          </div>
          <div>
            <button
              onClick={handlePayment}
              className="btn btn-primary btn-block bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
