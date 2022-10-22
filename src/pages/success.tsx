import { GetServerSideProps } from "next"
import Link from "next/link"
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { ImageContainer, SuccessContainer } from "../styles/pages/success"
import Image from "next/future/image"
import Head from "next/head"

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Success | IgniteShop</title>
        <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>
        <h1>Compra eferuada</h1>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={120}
            height={160}
          />
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua{" "}
          <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>
        <Link href={"/"}>Voltar para ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  })

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
