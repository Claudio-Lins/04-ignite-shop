import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import type { GetStaticProps } from "next"
import Image from "next/future/image"
import Head from "next/head"
import Link from "next/link"
import Stripe from "stripe"
import { CartButton } from "../components/CartButton"
import { stripe } from "../lib/stripe"
import { HomeContainer, Product } from "../styles/pages/home"

interface HomeProps {
  products: {
    id: string
    price: string
    imageUrl: string
    name: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <>
      <Head>
        <title>Home | IgniteShop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product?.imageUrl} alt="" width={520} height={480} />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton color={"green"} size={"large"}/>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  })
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(price?.unit_amount / 100),
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
