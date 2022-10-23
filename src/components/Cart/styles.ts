import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  width: '30rem',
  backgroundColor: '$gray800',
  padding: '3rem',
  paddingTop: '5rem',
  boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: 'lg',
    fontWeight: 'bold',
    color:'$gray100',
    marginBottom: '2rem',
  }
})

export const CartClose = styled(Dialog.Close, {
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray500',
})

export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  height: '5.8125rem',
})

export const CartProductImage = styled("div", {
  height: '5.8125rem',
  width: '6.3125rem',
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const CartProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  p: {
    fontSize: '$md',
    color: '$gray300',
  },

  strong: {
    fontSize: '$md',
    marginTop: 4,
    fontWeight: 'bold',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    width: 'max-content',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500',
  }
})

export const CartFinalization = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",

  button: {
    width: "100%",
    background: "$green500",
    color: "$white",
    fontSize: "1.125rem",
    height: "4.3125rem",
    border: "none",
    borderRadius: 8,
    fontWeight: 700,

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
})

export const FinalizationDetails = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginBottom: 55,

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    p: {
      fontSize: "$md",
      color: "$gray300",
    },

    "&:last-child": {
      fontWeight: "bold",

      span: {
        fontSize: "$md",
      },

      p: {
        color: "$gray100",
        fontSize: "$xl",
      },
    },
  },
})