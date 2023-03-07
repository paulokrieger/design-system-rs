import * as ToastRadix from '@radix-ui/react-toast'

import { styled, keyframes } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const ToastContainer = styled(ToastRadix.Root, {
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideOut}  100ms ease-in`,
  },
})

export const ToastTitle = styled(ToastRadix.Title, {
  fontSize: '$xl',
  fontFamily: '$default',

  fontWeight: '$bold',
  color: '$white',
})

export const ToastDescription = styled(ToastRadix.Description, {
  fontSize: '$xl',
  fontFamily: '$default',
  paddingTop: '$1',

  fontWeight: 'regular',
  color: '$gray200',
})

export const ToastClose = styled(ToastRadix.Close, {
  background: 'transparent',
  border: 0,
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewPort = styled(ToastRadix.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  zIndex: 9999,
})
