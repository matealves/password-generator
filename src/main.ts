import "./css/style.css";
import app from "./ts/render";

import {
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol,
} from "./ts/functions/getChar";
import { password, generatePassword } from "./ts/functions/generate";
import { copyToClipboard } from "./ts/functions/copyToClipboard";

// Render DOM
document.querySelector<HTMLDivElement>("#register-container")!.innerHTML = app;

// Select elements
const generatorPasswordElement = 
  document.querySelector<HTMLDivElement>("#generated-password");
const generatorPasswordButton = 
  document.querySelector<HTMLSpanElement>("#open-generate-password");
const copyPasswordButton =
  document.querySelector<HTMLButtonElement>("#copy-password");

// Events
generatorPasswordButton?.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});

copyPasswordButton?.addEventListener("click", () => {
  copyToClipboard(password);
});

export { generatorPasswordElement, copyPasswordButton };
