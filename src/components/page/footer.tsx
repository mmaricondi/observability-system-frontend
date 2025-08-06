import { LogoIcon } from "../../assets/icons";

export function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full text-sm text-gray-500 bg-gray-100 p-5 mt-10">
      <LogoIcon />
      <p>Click Cannabis S.A. • CNPJ 58.090.406/0001-92</p>
      <p>©Click Cannabis {new Date().getFullYear()}</p>
    </footer>
  );
}