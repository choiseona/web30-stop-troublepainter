import{j as V}from"./jsx-runtime-CkxqCPlQ.js";import{r as y}from"./index-DJO9vBfz.js";import{c as f}from"./index-Bb4qSo10.js";import{c as x}from"./cn-jM7Hu9J5.js";const b=f("inline-flex items-center justify-center gap-2 whitespace-nowrap transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{primary:"border-2 border-violet-950 bg-violet-500 hover:bg-violet-600",secondary:"border-2 border-violet-950 bg-eastbay-900 hover:bg-eastbay-950",transperent:"hover:brightness-95"},size:{text:"h-14 w-full rounded-2xl text-2xl font-medium text-stroke-md",icon:"h-10 w-10"}},defaultVariants:{variant:"primary",size:"text"}}),s=y.forwardRef(({className:u,variant:H,size:g,...h},v)=>V.jsx("button",{className:x(b({variant:H,size:g,className:u})),ref:v,...h}));s.displayName="Button";s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const w="data:image/svg+xml,%3csvg%20width='38'%20height='38'%20viewBox='0%200%2038%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_365_5447)'%3e%3cpath%20d='M36.195%2010.8538H34.3781V7.23188H32.5731V5.42688H30.7563V3.62188H27.1463V1.805H23.5244V0H14.4756V1.805H10.8538V3.62188H7.23188V5.42688H5.42688V7.23188H3.62188V10.8538H1.805V14.4756H0V23.5244H1.805V27.1463H3.62188V30.7563H5.42688V32.5731H7.23188V34.3781H10.8538V36.195H14.4756V38H23.5244V36.195H27.1463V34.3781H30.7563V32.5731H32.5731V30.7563H34.3781V27.1463H36.195V23.5244H38V14.4756H36.195V10.8538ZM14.4756%207.23188H16.2806V5.42688H21.7194V7.23188H23.5244V12.6706H21.7194V14.4756H16.2806V12.6706H14.4756V7.23188ZM27.1463%2030.7563H25.3294V32.5731H16.2806V30.7563H14.4756V18.0975H16.2806V16.2806H21.7194V18.0975H23.5244V27.1463H25.3294V28.9512H27.1463V30.7563Z'%20fill='%23F2FF56'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_365_5447'%3e%3crect%20width='38'%20height='38'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",S={component:s,title:"components/ui/Button",argTypes:{variant:{control:"select",options:["primary","secondary","transperent"],description:"버튼 스타일",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["text","icon"],description:"버튼 크기",table:{defaultValue:{summary:"text"}}},children:{control:"text",description:"버튼 내용"}},parameters:{docs:{description:{component:"다양한 상황에서 사용할 수 있는 기본 버튼 컴포넌트입니다."}}},tags:["autodocs"]},e={args:{variant:"primary",size:"text",children:"Primary Button"}},r={args:{variant:"secondary",size:"text",children:"Secondary Button"}},t={args:{variant:"transperent",size:"icon",children:V.jsx("img",{src:w,alt:"Help Icon"})}};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'text',
    children: 'Primary Button'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'text',
    children: 'Secondary Button'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'transperent',
    size: 'icon',
    children: <img src={helpIcon} alt="Help Icon" />
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const j=["Primary","Secondary","Transparent"];export{e as Primary,r as Secondary,t as Transparent,j as __namedExportsOrder,S as default};
