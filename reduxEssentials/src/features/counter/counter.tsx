import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="flex flex-col items-center p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg mt-8 sm:p-6 md:p-8">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Counter</h2>

      <div className="flex items-center justify-center mb-6">
        <button
          className="px-4 py-2 text-2xl bg-red-500 text-white rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-2xl mx-6 text-gray-700">{count}</span>
        <button
          className="px-4 py-2 text-2xl bg-green-500 text-white rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          className="px-3 py-2 text-xl border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none w-full sm:w-1/3 text-center"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          type="number"
        />
        <button
          className="px-4 py-2 text-xl bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors w-full sm:w-auto"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className="px-4 py-2 text-xl bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors w-full sm:w-auto"
          onClick={() => dispatch(incrementByAmount(1))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
