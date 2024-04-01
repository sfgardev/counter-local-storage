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
  onChangeSettings: (event: ChangeEvent<HTMLInputElement>) => void;
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
  onChangeSettings,
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
            name="maxValue"
            onChange={onChangeSettings}
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
            name="startValue"
            onChange={onChangeSettings}
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
