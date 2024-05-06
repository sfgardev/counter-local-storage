import {
  CounterState,
  counterReducer,
  incrementCountAC,
  resetCountAC,
} from "./counter-reducer";

let initialState: CounterState;

beforeEach(() => {
  initialState = {
    count: 0,
  };
});

test("Count should be equal 1 after incrementing", () => {
  const action = incrementCountAC();

  const state = counterReducer(initialState, action);

  expect(state.count).toBe(1);
});

test("Count should be equal 3 after reseting", () => {
  const action = resetCountAC(3);

  const state = counterReducer(initialState, action);

  expect(state.count).toBe(3);
});
