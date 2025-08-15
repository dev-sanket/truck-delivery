// src/services/keyboardService.ts
import { Keyboard } from "@capacitor/keyboard";

export const registerKeyboardEvents = (
  onOpen?: () => void,
  onClose?: () => void
) => {
  // Fires when keyboard is opening
  Keyboard.addListener("keyboardWillShow", () => {
    console.log("Keyboard open");
    if (onOpen) onOpen(); // Call your custom action
  });

  // Fires when keyboard is closing
  Keyboard.addListener("keyboardWillHide", () => {
    console.log("Keyboard close");
    if (onClose) onClose(); // Call your custom action
  });
};

export const removeKeyboardEvents = async () => {
  await Keyboard.removeAllListeners();
};
