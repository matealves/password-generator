import { copyPasswordButton } from "../../main";

export const copyToClipboard = (password: string): void => {
  navigator.clipboard.writeText(password);
  copyPasswordButton!.style.cssText = "background-color: #81d340; color: #fff";
  copyPasswordButton!.innerText = "Copiado ✓";

  console.log("Copiado ✓");
};
