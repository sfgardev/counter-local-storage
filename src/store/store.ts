import { combineReducers, createStore } from "redux";
import { loadState, saveState } from "../localStorage";
import { counterReducer } from "./counter-reducer";
import { settingsReducer } from "./settings-reducer";

const persistedState = loadState() as RootState;

const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsReducer,
});

const store = createStore(rootReducer, persistedState as any);

store.subscribe(() => saveState(store.getState()));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
