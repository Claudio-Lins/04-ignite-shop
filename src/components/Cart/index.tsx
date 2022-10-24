import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/future/image"
import { X } from "phosphor-react"
import React from "react"
import { useCart } from "../../hooks/useCart"
import { CartButton } from "../CartButton"
import {
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from "./styles"

export function Cart() {
  const { cartItems, checkIfItemAlreadyExists } = useCart()
  const cartQuantity = cartItems.length
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
            {cartQuantity <= 0 && <p>Parece que seu carrinho esta vazio</p>}
            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    src={cartItem.imageUrl}
                    alt={cartItem.name}
                    width={100}
                    height={93}
                  />
                </CartProductImage>
                <CartProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price}</strong>
                  <button onClick={() => console.log('remove')}>Remover</button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartQuantity} {cartQuantity > 1 ? "itens" : "item"}
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
