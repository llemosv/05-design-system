import{a as u,B as l,b as g}from"./index-1c5bf9a6.js";import{j as o,r as O,a as f}from"./index-57d5cd03.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";const e=s=>{const[m,t]=O.useState(!1);return f("div",{children:[o(l,{onClick:()=>{t(!0)},children:"Agendar"}),o(g,{open:m,onOpenChange:t,...s})]})},y={title:"Form/Toast",component:e,args:{title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro às 16h"},decorators:[s=>o(u,{css:{display:"flex",padding:"$20",background:"$gray600"},children:s()})]},r={};var a,n,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(props: ToastProps) => {
  const [isOpen, setOpen] = useState(false);
  return <div>
      <Button onClick={() => {
      setOpen(true);
    }}>
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>;
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const C=["DemoToast","Primary"];export{e as DemoToast,r as Primary,C as __namedExportsOrder,y as default};
//# sourceMappingURL=Toast.stories-9fc1b855.js.map
