import React from "react";
import "./App.css";

import { Counter } from "./container/counter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { increment } from "./container/counter/slice";

const App: React.FC<{}> = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        {count}
        <button className="button" onClick={() => dispatch(increment())}>
          {/* dispatch(incrementByAmount({ value: 10 })) */} +{" "}
        </button>
      </header>
    </div>
  );
};

export default App;
