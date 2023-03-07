import {
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipArrow,
  TooltipTrigger,
} from './styles'

import * as TooltipRadix from '@radix-ui/react-tooltip'

export const TooltipProvider = TooltipRadix.Provider

export interface TooltipProps extends TooltipRadix.TooltipProps {
  description: string
}

export function Tooltip({ description, children }: TooltipProps) {
  return (
    <>
      <TooltipContainer>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {description}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </>
  )
}
