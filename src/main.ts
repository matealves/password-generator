import "./css/style.css";
import app from "./render";

let password: string = "";

document.querySelector<HTMLDivElement>("#register-container")!.innerHTML = app;

// Select elements
const generatorPasswordButton = document.querySelector<HTMLSpanElement>(
  "#open-generate-password"
);
const copyPasswordButton =
  document.querySelector<HTMLButtonElement>("#copy-password");

const generatorPasswordElement = document.querySelector<HTMLDivElement>(
  "#generated-password"
);

// Functions
// Letters, numbers and symbols
const getLetterLowerCase = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = (): string => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = (): string => {
  const symbols: string = "(){}[]=<>/,.!@#$%&*+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
  getLetterLowerCase: () => string,
  getLetterUpperCase: () => string,
  getNumber: () => string,
  getSymbol: () => string
): void => {
  password = "";

  const passwordLength = 10;
  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  for (let i = 0; i < passwordLength; i += 4) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }

  password = password.slice(0, passwordLength);
  copyPasswordButton!.style.cssText =
    "background-color: transparent; color: #81d340";
  copyPasswordButton!.innerText = "Copiar";
  generatorPasswordElement!.style.display = "block";
  generatorPasswordElement!.querySelector("h4")!.innerText = password;

  console.log(password);
};

const copyToClipboard = (password: string): void => {
  navigator.clipboard.writeText(password);
  copyPasswordButton!.style.cssText = "background-color: #81d340; color: #fff";
  copyPasswordButton!.innerText = "Copiado ✓";

  console.log("Copiado ✓");
};

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
