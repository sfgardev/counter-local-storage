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
import Input from "./Input";

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
        <Input
          label="max value:"
          className={isMaxValueInvalid || startGreaterOrEqualMax ? "error" : ""}
          type="number"
          value={settings.maxValue}
          name="maxValue"
          onChange={handleChangeMaxValue}
        />
        <Input
          label="start value:"
          className={
            isStartValueInvalid || startGreaterOrEqualMax ? "error" : ""
          }
          type="number"
          value={settings.startValue}
          name="startValue"
          onChange={handleChangeStartValue}
        />
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
