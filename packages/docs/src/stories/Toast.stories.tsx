import type { Meta } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import {
  Button,
  Toast,
  ToastProvider,
  ToastProps,
} from "@paulok-ignite-ui/react";

const formattedDate = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
}).format(new Date());

export default {
  title: "Surfaces/Toast",
  component: Toast,

  args: {
    open: false,
    title: "Agendamento Realizado",
    description: formattedDate,
  },
  decorators: [],
} as Meta<ToastProps>;

export const Primary = ({ onOpenChange, ...args }: ToastProps) => {
  const [{ open }, updateArgs] = useArgs();

  const handleOpenChange = () => updateArgs({ open: !open });

  return (
    <>
      <Button onClick={() => updateArgs({ open: true })}>Adicionar</Button>
      <ToastProvider swipeDirection="left">
        <Toast open={open} onOpenChange={handleOpenChange} {...args} />
      </ToastProvider>
    </>
  );
};
