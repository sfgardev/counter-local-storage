import { ChangeEvent } from "react";
import Button from "./Button";

type SettingsProps = {
  startValue: number;
  maxValue: number;
  isStartValueInvalid: boolean;
  isMaxValueInvalid: boolean;
  startGreaterOrEqualMax: boolean;
  isError: boolean;
  isSetupping: boolean;
  onChangeStartValue: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void;
  onSetCount: () => void;
};

export default function Settings({
  startValue,
  maxValue,
  isMaxValueInvalid,
  isStartValueInvalid,
  startGreaterOrEqualMax,
  isError,
  isSetupping,
  onChangeMaxValue,
  onChangeStartValue,
  onSetCount,
}: SettingsProps) {
  return (
    <div className="counter">
      <div className="counter-table">
        <label>
          max value:
          <input
            className={
              isMaxValueInvalid || startGreaterOrEqualMax ? "error" : ""
            }
            value={maxValue}
            onChange={onChangeMaxValue}
            type="number"
          />
        </label>
        <label>
          start value:
          <input
            className={
              isStartValueInvalid || startGreaterOrEqualMax ? "error" : ""
            }
            value={startValue}
            onChange={onChangeStartValue}
            type="number"
          />
        </label>
      </div>
      <div className="buttons">
        <Button disabled={!isSetupping || isError} onClick={onSetCount}>
          set
        </Button>
      </div>
    </div>
  );
}
