import { ChangeEvent, useState } from "react";
import Button from "./Button";
import Settings from "./Settings";

const setItemToLocalStorage = (key: string, value: string | number) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const getItemFromLocalStorage = (key: string) => {
  const localStorageItem = window.localStorage.getItem(key);
  return localStorageItem ? JSON.parse(localStorageItem) : 0;
};

export default function Counter() {
  const [maxValue, setMaxValue] = useState<number>(() =>
    getItemFromLocalStorage("maxValue")
  );
  const [startValue, setStartValue] = useState<number>(() =>
    getItemFromLocalStorage("startValue")
  );
  const [count, setCount] = useState<number>(startValue);
  const [isSetupping, setIsSetupping] = useState(false);

  function handleIncrement() {
    setCount((prevState) => prevState + 1);
  }

  function handleReset() {
    setCount(startValue);
  }

  function handleChangeStartValue(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    setStartValue(value);
    setIsSetupping(true);
    setItemToLocalStorage("startValue", value);
  }

  function handleChangeMaxValue(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    setMaxValue(value);
    setIsSetupping(true);
    setItemToLocalStorage("maxValue", value);
  }

  function handleSetCount() {
    setCount(startValue);
    setIsSetupping(false);
  }

  const isIncDisabled = count === maxValue;
  const isStartValueInvalid = startValue < 0;
  const isMaxValueInvalid = maxValue < 0;
  const startGreaterOrEqualMax = startValue >= maxValue;
  const isError =
    isStartValueInvalid || isMaxValueInvalid || startGreaterOrEqualMax;

  return (
    <>
      {/* <div className="counter">
        <div className="counter-table">
          <label htmlFor="">
            max value:
            <input
              className={
                isMaxValueInvalid || startGreaterOrEqualMax ? "error" : ""
              }
              value={maxValue}
              onChange={handleChangeMaxValue}
              type="number"
            />
          </label>
          <label htmlFor="">
            start value:
            <input
              className={
                isStartValueInvalid || startGreaterOrEqualMax ? "error" : ""
              }
              value={startValue}
              onChange={handleChangeStartValue}
              type="number"
            />
          </label>
        </div>
        <div className="buttons">
          <Button disabled={!isSetupping || isError} onClick={handleSetCount}>
            set
          </Button>
        </div>
      </div> */}

      <Settings
        startValue={startValue}
        maxValue={maxValue}
        isError={isError}
        isMaxValueInvalid={isMaxValueInvalid}
        isSetupping={isSetupping}
        isStartValueInvalid={isStartValueInvalid}
        startGreaterOrEqualMax={startGreaterOrEqualMax}
        onChangeMaxValue={handleChangeMaxValue}
        onChangeStartValue={handleChangeStartValue}
        onSetCount={handleSetCount}
      />

      <div className="counter">
        <div className="counter-table">
          {isError && <p className={isError ? "error" : ""}>Incorrect value</p>}
          {!isError && isSetupping && <p>enter values and press 'set'</p>}
          {!isError && !isSetupping && (
            <span className={isIncDisabled ? "error" : ""}>{count}</span>
          )}
        </div>
        <div className="buttons">
          <Button
            disabled={isIncDisabled || isSetupping || isError}
            onClick={handleIncrement}
          >
            inc
          </Button>
          <Button disabled={isSetupping || isError} onClick={handleReset}>
            reset
          </Button>
        </div>
      </div>
    </>
  );
}
