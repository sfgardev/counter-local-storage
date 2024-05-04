export type CounterState = {
  count: number;
};

const initialState = {
  count: 0,
};

type CounterActions =
  | ReturnType<typeof incrementCountAC>
  | ReturnType<typeof resetCountAC>;

export const counterReducer = (
  state = initialState,
  action: CounterActions
): CounterState => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { ...state, count: state.count + 1 };
    case "RESET_COUNT":
      return { ...state, count: action.payload.countValue };
    default:
      return state;
  }
};

export const incrementCountAC = () => ({ type: "INCREMENT_COUNT" } as const);

export const resetCountAC = (countValue: number) =>
  ({ type: "RESET_COUNT", payload: { countValue } } as const);
