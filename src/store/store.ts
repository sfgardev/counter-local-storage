import { combineReducers, legacy_createStore } from "redux";
import { loadState, saveState } from "../localStorage";
import { counterReducer } from "./counter-reducer";
import { settingsReducer } from "./settings-reducer";

const persistedState = loadState();

const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsReducer,
});
// @ts-ignore
const store = legacy_createStore(rootReducer, persistedState);

store.subscribe(() => saveState(store.getState()));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
