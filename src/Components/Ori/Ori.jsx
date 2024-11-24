import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeIncrement } from "../../lib/oriSlice";

const Ori = () => {
  const like = useSelector((state) => state.ori.value);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border-2 p-4 rounded-md">
        <h1>আপনি ফ্রেশার ডেভেলপার, আর ইন্টারভিউ মানেই হাত-পা কাঁপা শুরু! </h1>
        <button
          onClick={() => dispatch(likeIncrement())}
          className="bg-blue-500 px-4 py-2 text-white font-semibold rounded-md mt-4"
        >
          Like {like}
        </button>
      </div>
      <div className="border-2 p-4 rounded-md">
        <h1>আপনি ফ্রেশার ডেভেলপার, আর ইন্টারভিউ মানেই হাত-পা কাঁপা শুরু! </h1>
        <button
          onClick={() => dispatch(likeIncrement())}
          className="bg-blue-500 px-4 py-2 text-white font-semibold rounded-md mt-4"
        >
          Like {like}
        </button>
      </div>
      <div className="border-2 p-4 rounded-md">
        <h1>আপনি ফ্রেশার ডেভেলপার, আর ইন্টারভিউ মানেই হাত-পা কাঁপা শুরু! </h1>
        <button
          onClick={() => dispatch(likeIncrement())}
          className="bg-blue-500 px-4 py-2 text-white font-semibold rounded-md mt-4"
        >
          Like {like}
        </button>
      </div>
      <div className="border-2 p-4 rounded-md">
        <h1>আপনি ফ্রেশার ডেভেলপার, আর ইন্টারভিউ মানেই হাত-পা কাঁপা শুরু! </h1>
        <button
          onClick={() => dispatch(likeIncrement())}
          className="bg-blue-500 px-4 py-2 text-white font-semibold rounded-md mt-4"
        >
          Like {like}
        </button>
      </div>
    </div>
  );
};

export default Ori;
