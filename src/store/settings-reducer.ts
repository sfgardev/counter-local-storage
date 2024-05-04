export type SettingsState = {
  startValue: number;
  maxValue: number;
  isSetupping: boolean;
};

const initialState: SettingsState = {
  startValue: 0,
  maxValue: 0,
  isSetupping: false,
};

type SettingsActions =
  | ReturnType<typeof changeStartValueAC>
  | ReturnType<typeof changeMaxValueAC>
  | ReturnType<typeof changeSetupAC>;

export const settingsReducer = (
  state = initialState,
  action: SettingsActions
): SettingsState => {
  switch (action.type) {
    case "CHANGE_MAX_VALUE":
      return { ...state, maxValue: action.payload.maxValue };

    case "CHANGE_START_VALUE":
      return { ...state, startValue: action.payload.startValue };

    case "CHANGE_SETUP":
      return { ...state, isSetupping: action.payload.isSetup };

    default:
      return state;
  }
};

export const changeStartValueAC = (startValue: number) =>
  ({
    type: "CHANGE_START_VALUE",
    payload: { startValue },
  } as const);

export const changeMaxValueAC = (maxValue: number) =>
  ({ type: "CHANGE_MAX_VALUE", payload: { maxValue } } as const);

export const changeSetupAC = (isSetup: boolean) =>
  ({ type: "CHANGE_SETUP", payload: { isSetup } } as const);
