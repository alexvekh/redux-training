import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="counter">
      <button className="button" onClick={() => null}>
        {" "}
        -{" "}
      </button>
      <span className="value"> {count} </span>
      <button className="button" onClick={() => null}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}
