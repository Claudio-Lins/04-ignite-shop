import Link from "next/link";
import Image from "next/future/image";
import logoImg from "../../assets/logo.svg"
import { HeaderContainer } from "./styles";
import { Cart } from "../Cart";


export function Header() {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <Image src={logoImg} alt="logo" />
      </Link>
      <Cart />
    </HeaderContainer>
  )
}
