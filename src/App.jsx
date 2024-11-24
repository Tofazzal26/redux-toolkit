import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./lib/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
          <div className="flex">
            <div>
              <img
                src="https://i.ibb.co.com/0rXNNQn/12.png"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div>
              <div className="mt-6 mb-2">
                <span className="block text-[12px] font-semibold text-[#8fbe1f] tracking-widest uppercase ">
                  95 Reviews
                </span>
                <h2 className="text-[22px] font-semibold tracking-wide">
                  Corrots Group Scal
                </h2>
              </div>
              <h2 className="text-[40px] font-semibold text-[#8fbe1f]">
                $32.00{" "}
                <span className="text-[35px]">
                  <del>$46.00</del>
                </span>{" "}
              </h2>
              <h2 className="font-semibold text-gray-500 border-y-2 py-2">
                Categories: <span className="text-black">Food_Drinks</span>{" "}
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center my-4">
                  <div className="border-2">
                    <button
                      onClick={() => dispatch(decrement())}
                      className="font-bold text-[18px] px-4 py-[15px]"
                    >
                      -
                    </button>
                  </div>
                  <div className="border-y-2">
                    <h2 className="font-semibold px-4 py-[17px]">{count}</h2>
                  </div>
                  <div className="border-2 ">
                    <button
                      onClick={() => dispatch(increment())}
                      className="font-bold text-base px-[13px] py-[17px]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <button className="bg-[#80b500] px-4 py-4 font-semibold text-white">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
