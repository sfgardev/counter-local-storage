import {
  SettingsState,
  changeMaxValueAC,
  changeSetupAC,
  changeStartValueAC,
  settingsReducer,
} from "./settings-reducer";

let initialState: SettingsState;

beforeEach(() => {
  initialState = {
    startValue: 0,
    maxValue: 0,
    isSetupping: false,
  };
});

test("startValue should be equal 5", () => {
  const action = changeStartValueAC(5);

  const state = settingsReducer(initialState, action);

  expect(state.startValue).toBe(5);
  expect(state.maxValue).toBe(0);
  expect(state.isSetupping).toBe(false);
});

test("maxValue should be equal 11", () => {
  const action = changeMaxValueAC(11);

  const state = settingsReducer(initialState, action);

  expect(state.maxValue).toBe(11);
  expect(state.startValue).toBe(0);
  expect(state.isSetupping).toBe(false);
});

test("isSetupping should be equal true", () => {
  const action = changeSetupAC(false);

  const state = settingsReducer(initialState, action);

  expect(state.isSetupping).toBe(false);
  expect(state.maxValue).toBe(0);
  expect(state.startValue).toBe(0);
});
