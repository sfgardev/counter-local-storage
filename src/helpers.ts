import { SettingsState } from "./store/settings-reducer";

export const getValidationRules = (settings: SettingsState) => {
  const isStartValueInvalid = settings.startValue < 0;
  const isMaxValueInvalid = settings.maxValue < 0;
  const startGreaterOrEqualMax = settings.startValue >= settings.maxValue;
  const isError =
    isStartValueInvalid || isMaxValueInvalid || startGreaterOrEqualMax;

  return {
    isError,
    isMaxValueInvalid,
    isStartValueInvalid,
    startGreaterOrEqualMax,
  };
};
