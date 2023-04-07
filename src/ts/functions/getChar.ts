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

export { getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol };
