export function Counter() {
  const count = 10;

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
