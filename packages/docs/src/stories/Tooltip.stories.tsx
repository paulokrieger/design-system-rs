import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipProps,
  TooltipProvider,
  Box,
  Text,
} from "@paulok-ignite-ui/react";

export default {
  title: "Surfaces/Tooltip",
  component: Tooltip,

  args: {
    children: (
      <Box css={{ width: "$4" }}>
        <Text css={{ display: "inline" }}>26</Text>
      </Box>
    ),
    description: "21 de Outubro - Indisponível",
  },
  decorators: [(story) => <TooltipProvider>{story()}</TooltipProvider>],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
  args: {},
};
