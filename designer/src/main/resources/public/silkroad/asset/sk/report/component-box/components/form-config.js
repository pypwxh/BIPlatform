define(["report/component-box/components/form-vm-template"],function(a){var b={id:"snpt.form",compId:"comp-id-form",clzType:"COMPONENT",clzKey:"DI_FORM",reportType:"RTPL_VIRTUAL",init:{action:{name:"sync"}},sync:{viewDisable:"ALL"},dataOpt:{submitMode:"IMMEDIATE"},reportTemplateId:"RTPL_VIRT  UAL_ID",vuiRef:{}},c=function(a){var c=$.extend(!0,{},b);return c.id=a+"form",c.vuiRef.input=[],c};return{entityDescription:b,processRenderData:c,vmTemplate:a}});