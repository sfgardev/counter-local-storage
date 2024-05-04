import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { getValidationRules } from "./helpers";
import {
  CounterState,
  incrementCountAC,
  resetCountAC,
} from "./store/counter-reducer";
import { RootState } from "./store/store";

export default function Counter() {
  const counter = useSelector<RootState, CounterState>(
    (state) => state.counter
  );
  const maxValue = useSelector<RootState, number>(
    (state) => state.settings.maxValue
  );
  const startValue = useSelector<RootState, number>(
    (state) => state.settings.startValue
  );
  const isSetupping = useSelector<RootState, boolean>(
    (state) => state.settings.isSetupping
  );

  const { isError } = getValidationRules({ maxValue, startValue, isSetupping });

  const dispatch = useDispatch();

  const isCountEqualsMaxValue = counter.count === maxValue;
  const isIncrememntButtonDisabled =
    isCountEqualsMaxValue || isSetupping || isError;
  const isResetButtonDisabled = isSetupping || isError;

  function handleIncrement() {
    dispatch(incrementCountAC());
  }

  function handleReset() {
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
        <Button disabled={isIncrememntButtonDisabled} onClick={handleIncrement}>
          inc
        </Button>
        <Button disabled={isResetButtonDisabled} onClick={handleReset}>
          reset
        </Button>
      </div>
    </div>
  );
}
