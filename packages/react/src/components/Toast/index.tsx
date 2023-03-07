import {
  ToastContainer,
  ToastTitle,
  ToastClose,
  ToastViewPort,
  ToastDescription,
} from './styles'

import * as ToastRadix from '@radix-ui/react-toast'

import { Box } from '../Box'
import { Heading } from '../Heading'
import { X } from 'phosphor-react'
import { Text } from '../Text'

export const ToastProvider = ToastRadix.Provider

export interface ToastProps extends ToastRadix.ToastProps {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <>
      <ToastContainer asChild {...props}>
        <Box css={{ padding: '$3 $5' }}>
          <ToastTitle>
            <Heading>{title}</Heading>
          </ToastTitle>
          <ToastDescription asChild>
            <Text size="sm">{description}</Text>
          </ToastDescription>
          <ToastClose>
            <X size={20} />
          </ToastClose>
        </Box>
      </ToastContainer>
      <ToastViewPort />
    </>
  )
}

Toast.displayName = 'Toast'
