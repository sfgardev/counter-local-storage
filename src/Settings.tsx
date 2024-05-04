import { useDispatch } from "react-redux";
import Button from "./Button";
import { ChangeEvent } from "react";
import {
  changeMaxValueAC,
  changeSetupAC,
  changeStartValueAC,
} from "./store/settings-reducer";
import { resetCountAC } from "./store/counter-reducer";

type SettingsProps = {
  startValue: number;
  maxValue: number;
  isStartValueInvalid: boolean;
  isMaxValueInvalid: boolean;
  startGreaterOrEqualMax: boolean;
  isError: boolean;
  isSetupping: boolean;
  // onChangeSettings: (event: ChangeEvent<HTMLInputElement>) => void;
  // onSetCount: () => void;
};

export default function Settings({
  startValue,
  maxValue,
  isMaxValueInvalid,
  isStartValueInvalid,
  startGreaterOrEqualMax,
  isError,
  isSetupping,
}: // onChangeSettings,
// onSetCount,
SettingsProps) {
  const dispatch = useDispatch();

  const handleChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMaxValueAC(Number(event.currentTarget.value)));
    dispatch(changeSetupAC(true));
  };

  const handleChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStartValueAC(Number(event.currentTarget.value)));
    dispatch(changeSetupAC(true));
  };

  const handleSetCount = () => {
    dispatch(changeSetupAC(false));
    dispatch(resetCountAC(startValue));
  };

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
            onChange={handleChangeMaxValue}
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
    </div>
  );
}
