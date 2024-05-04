import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  CounterState,
  incrementCountAC,
  resetCountAC,
} from "./store/counter-reducer";
import { RootState } from "./store/store";

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
  // const [count, setCount] = useState<number>(startValue);

  const counter = useSelector<RootState, CounterState>(
    (state) => state.counter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // setCount(startValue);
  }, [startValue]);

  const isCountEqualsMaxValue = counter.count === maxValue;

  function handleIncrement() {
    // setCount((prevState) => prevState + 1);
    dispatch(incrementCountAC());
  }

  function handleReset() {
    // setCount(startValue);
    dispatch(resetCountAC(startValue));
  }

  return (
    <div className="counter">
      <div className="counter-table">
        {isError && <p className={isError ? "error" : ""}>Incorrect value</p>}
        {!isError && isSetupping && <p>enter values and press 'set'</p>}
        {!isError && !isSetupping && (
          <span className={isCountEqualsMaxValue ? "error" : ""}>
            {counter.count}
          </span>
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
