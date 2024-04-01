import { ChangeEvent, useState } from "react";
import Counter from "./Counter";
import Settings from "./Settings";

const setItemToLocalStorage = <T,>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const getItemFromLocalStorage = <T,>(key: string) => {
  const localStorageItem = window.localStorage.getItem(key);
  return localStorageItem ? (JSON.parse(localStorageItem) as T) : null;
};

export default function CounterView() {
  const [settings, setSettings] = useState({
    startValue: getItemFromLocalStorage<number>("startValue") || 0,
    maxValue: getItemFromLocalStorage<number>("maxValue") || 0,
  });

  const [isSetupping, setIsSetupping] = useState(false);

  function handleChangeSettings(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setSettings((prevState) => ({
      ...prevState,
      [name]: +value,
    }));
    setIsSetupping(true);
    setItemToLocalStorage(name, +value);
  }

  function handleSetCount() {
    setIsSetupping(false);
  }

  const isStartValueInvalid = settings.startValue < 0;
  const isMaxValueInvalid = settings.maxValue < 0;
  const startGreaterOrEqualMax = settings.startValue >= settings.maxValue;
  const isError =
    isStartValueInvalid || isMaxValueInvalid || startGreaterOrEqualMax;

  return (
    <>
      <Settings
        startValue={settings.startValue}
        maxValue={settings.maxValue}
        isError={isError}
        isMaxValueInvalid={isMaxValueInvalid}
        isSetupping={isSetupping}
        isStartValueInvalid={isStartValueInvalid}
        startGreaterOrEqualMax={startGreaterOrEqualMax}
        onChangeSettings={handleChangeSettings}
        onSetCount={handleSetCount}
      />

      <Counter
        startValue={settings.startValue}
        maxValue={settings.maxValue}
        isError={isError}
        isSetupping={isSetupping}
      />
    </>
  );
}
