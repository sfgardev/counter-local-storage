import { RootState } from "./store/store";

export const setItemToLocalStorage = <T>(key: string, value: T) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
};

export const getItemFromLocalStorage = <T>(key: string) => {
  try {
    const localStorageItem = window.localStorage.getItem(key);
    return localStorageItem ? (JSON.parse(localStorageItem) as T) : null;
  } catch (error) {
    console.log(error);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
