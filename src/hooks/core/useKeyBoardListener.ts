import { useState, useLayoutEffect } from "react";
import { Keyboard } from "react-native";

export const useKeyboardListener = (initialTopValue: number) => {
  const [topValue, setTopValue] = useState<number>(initialTopValue);

  useLayoutEffect(() => {
    const keyboardDidOpenListener = Keyboard.addListener(
      "keyboardWillShow",
      () => setTopValue(15)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => setTopValue(initialTopValue)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidOpenListener.remove();
    };
  }, [initialTopValue]);

  return topValue;
};
