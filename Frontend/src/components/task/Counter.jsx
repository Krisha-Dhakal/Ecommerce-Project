import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const [data_one, setData_one] = useState(0);
  // const [data_two, setData_two] = useState(0);
  return (
    <>
      <div className="fixed inset-0 w-screen h-screen bg-red-300  flex  justify-center items-center">
        <button
          onClick={() => {
            if (!count < 1) setCount((prev) => prev - 1);
          }}
          className="bg-red-700 w-16 h-16 rounded-full text-white text-2xl relative -right-4 top-3"
        >
          -
        </button>
        <p className="min-w-[150px] min-h-[150px]  bg-zinc-800 text-white text-4xl font-bold rounded-full flex justify-center items-center">
          {count}
        </p>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          className="bg-red-700 w-16 h-16 rounded-full text-white text-2xl relative -left-4 top-3"
        >
          +
        </button>
      </div>
      <div className="">
        <button
          onClick={() => {
            if (!count < 1) setCount((prev) => prev - 1);
          }}
          className="bg-red-700 w-16 h-16 rounded-full text-white text-2xl"
        >
          -
        </button>
        <p className="min-w-[150px] min-h-[150px]  bg-zinc-800 text-white text-4xl font-bold rounded-full flex justify-center items-center">
          {count}
        </p>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          className="bg-red-700 w-16 h-16 rounded-full text-white text-2xl"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
