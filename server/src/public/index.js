const l=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),s={title:"Button"},c=()=>'<button class="btn sm">Small</button>',r=()=>'<button class="btn-outline sm">Small</button>',u=()=>'<button class="btn-text sm">Small</button>',i=()=>'<button class="btn">Regular</button>',a=()=>'<button class="btn-outline">Regular Outline</button>',_=()=>'<button class="btn-text">Regular Outline</button>',b=()=>'<button class="btn xl">Large</button>',p=()=>'<button class="btn-outline xl">Large Outline</button>',g=()=>'<button class="btn-text xl">Large Outline</button>',d=Object.freeze(Object.defineProperty({__proto__:null,Large:b,Large_Outline:p,Large_Text:g,Regular:i,Regular_Outline:a,Regular_Text:_,Small:c,Small_Outline:r,Small_Text:u,default:s},Symbol.toStringTag,{value:"Module"}));function m(t,n){return t+n}const f=document.querySelectorAll(".btn"),S=()=>{const t=m(2,2);alert(t)};f.forEach(t=>{t.addEventListener("click",()=>S())});console.log("Asdasd");const y=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("asd");const O=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),v=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),x=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),z=Object.assign({"./components/Button/button.stories.ts":d,"./components/Button/button.ts":y,"./components/Input/input.ts":O}),L=Object.assign({"./components/Button/button.css":l,"./styles/main.css":v,"./styles/reset.css":j,"./styles/variables.css":x});console.log(`
    🚀✨ %cInitialization Process Started! ✨🚀
    --------------------------------------
    %c
    📅  Timestamp: ${new Date().toLocaleString()}
    🛠️  Environment: production
    📦  Ready to load resources...
    
    `,"color: #4CAF50; font-size: 16px; font-weight: bold;","color: #2196F3; font-size: 14px;");const o=[],e=[];for(const t in z)o.push(...t.split("/").splice(-1));for(const t in L)e.push(...t.split("/").splice(-1));console.log(`
    🎬✨ %cInitialization Complete! ✨🎬
    ----------------------------------------
    📂 %cLoaded Scripts:
    ${o.map(t=>`   📜 ${t}`)}
    🎨 %cLoaded Styles:
    ${e.map(t=>`   🎨 ${t}`)}
    
    🚀 Application is ready to rock!
    `,"color: #4CAF50; font-size: 16px; font-weight: bold;","color: #FF9800; font-size: 14px;","color: #03A9F4; font-size: 14px;");
