import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg';
import Image from 'next/future/image'
import { Container, Header } from "../styles/pages/app";
import Link from "next/link";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/" passHref>
        <Image src={logoImg} alt="logo" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
