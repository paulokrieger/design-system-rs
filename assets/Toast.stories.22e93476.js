var i=Object.defineProperty;var e=(o,n)=>i(o,"name",{value:n,configurable:!0});import{d as s,a as p,e as l}from"./index.b4134a46.js";import{a as c,F as d,j as t}from"./jsx-runtime.e07fc038.js";import{ap as m}from"./iframe.4c69dde1.js";import"./index.4c040bc2.js";import"./index.2a02ad71.js";import"./index.c5d6466a.js";const u=new Intl.DateTimeFormat("pt-BR",{dateStyle:"full",timeStyle:"short"}).format(new Date),D={parameters:{storySource:{source:`import type { Meta } from "@storybook/react";
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
`,locationsMap:{primary:{startLoc:{col:23,line:27},endLoc:{col:1,line:40},startBody:{col:23,line:27},endBody:{col:1,line:40}}}}},title:"Surfaces/Toast",component:s,args:{open:!1,title:"Agendamento Realizado",description:u},decorators:[]},O=e(({onOpenChange:o,...n})=>{const[{open:a},r]=m();return c(d,{children:[t(p,{onClick:()=>r({open:!0}),children:"Adicionar"}),t(l,{swipeDirection:"left",children:t(s,{open:a,onOpenChange:e(()=>r({open:!a}),"handleOpenChange"),...n})})]})},"Primary"),B=["Primary"];export{O as Primary,B as __namedExportsOrder,D as default};
//# sourceMappingURL=Toast.stories.22e93476.js.map
