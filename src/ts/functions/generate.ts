import { generatorPasswordElement, copyPasswordButton } from "../../main";

let password: string = "";

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

export { password, generatePassword };
