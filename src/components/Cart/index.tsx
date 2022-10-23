import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/future/image"
import { X } from "phosphor-react"
import React from "react"
import { CartButton } from "../CartButton"
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from "./styles"

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>
          <h2>Sacola de Compras</h2>
          <section>
            {/* <p>Parece que seu carrinho esta vazioffff</p> */}
            <CartProduct>
              <CartProductImage>
                <Image
                  src="https://s3-alpha-sig.figma.com/img/44b0/4a7e/71869d037f271079521d89a34478f642?Expires=1667174400&Signature=gDbaB~dcUk2UTJL6p9k0VdB2eXm8cNZ34KB8UaKIqMxhZOE5K2VOmYwfPQknbs6r2Ry-xwFhLauo9rLTvWj61kIIHZp6uO8lfBP1qa1bx9sgL~YQ9pp3jzx2DzifXrTjodVcty8UkGxzUMyrPpUEEzOl4zAq2NGijoyivlo5MU9mI-Bq4X7LvEArBH8uCpz9Vwiwa1Dhl6n5VJ~41BE~ORwxjG4-90MsaYrFN9NCR7x4sABsGP~vMJUYwbysWL-~hKclsykl6XrV5JhwsS7N~YKjSXQxnRCYTZMEttWrWKe31MOvotbJa1yvKIKYRKiPZe8uhDKIirD~zfEFwgyt1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="Product 1"
                  width={100}
                  height={93}
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Camiseta Branca</p>
                <strong>34,00 €</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  1
                  {/* {cartQuantity} {cartQuantity > 1 ? "itens" : "item"} */}
                </p>
              </div>
              <div>
                <span>Valor total</span>
                <p>23€</p>
              </div>
            </FinalizationDetails>
            <button
              // onClick={handleCheckout}
              // disabled={isCreatingCheckoutSession || cartQuantity <= 0}
            >
              Finalizar compra
            </button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
