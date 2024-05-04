import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { ChangeEvent } from "react";
import {
  SettingsState,
  changeMaxValueAC,
  changeSetupAC,
  changeStartValueAC,
} from "./store/settings-reducer";
import { resetCountAC } from "./store/counter-reducer";
import { RootState } from "./store/store";
import { getValidationRules } from "./helpers";

export default function Settings() {
  const settings = useSelector<RootState, SettingsState>(
    (state) => state.settings
  );
  const {
    isError,
    isMaxValueInvalid,
    isStartValueInvalid,
    startGreaterOrEqualMax,
  } = getValidationRules(settings);
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
    dispatch(resetCountAC(settings.startValue));
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
            value={settings.maxValue}
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
            value={settings.startValue}
            name="startValue"
            onChange={handleChangeStartValue}
            type="number"
          />
        </label>
      </div>
      <div className="buttons">
        <Button
          disabled={!settings.isSetupping || isError}
          onClick={handleSetCount}
        >
          set
        </Button>
      </div>
    </div>
  );
}
