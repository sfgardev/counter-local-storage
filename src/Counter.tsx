import { useEffect, useState } from "react";
import Button from "./Button";

type CounterProps = {
  startValue: number;
  maxValue: number;
  isError: boolean;
  isSetupping: boolean;
};

export default function Counter({
  startValue,
  maxValue,
  isError,
  isSetupping,
}: CounterProps) {
  const [count, setCount] = useState<number>(startValue);

  useEffect(() => {
    setCount(startValue);
  }, [startValue]);

  const isCountEqualsMaxValue = count === maxValue;

  function handleIncrement() {
    setCount((prevState) => prevState + 1);
  }

  function handleReset() {
    setCount(startValue);
  }

  return (
    <div className="counter">
      <div className="counter-table">
        {isError && <p className={isError ? "error" : ""}>Incorrect value</p>}
        {!isError && isSetupping && <p>enter values and press 'set'</p>}
        {!isError && !isSetupping && (
          <span className={isCountEqualsMaxValue ? "error" : ""}>{count}</span>
        )}
      </div>
      <div className="buttons">
        <Button
          disabled={isCountEqualsMaxValue || isSetupping || isError}
          onClick={handleIncrement}
        >
          inc
        </Button>
        <Button disabled={isSetupping || isError} onClick={handleReset}>
          reset
        </Button>
      </div>
    </div>
  );
}
