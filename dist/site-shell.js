(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(':root{--cfde-blue: #2C5D8B;--cfde-lite-blue: #4681b9;--nav-shadow: rgba(50, 50, 93, .25) 0px 2px 5px -1px, rgba(0, 0, 0, .3) 0px 1px 3px -1px;--foot-shadow: inset rgba(50, 50, 93, 1) 0px 2px 5px -1px, rgba(0, 0, 0, .3) 0px 1px 3px -1px;--hamburger-size: clamp(14px, 10vmin, 26px)}html,body{margin:0;padding:0;min-height:100vh;color:#000;font-family:Arial,Helvetica,sans-serif}*{box-sizing:border-box}site-shell{display:flex;flex-direction:column;width:100vw;min-height:100vh;justify-content:space-between}.site-content{padding-top:100px;display:flex;flex-direction:column;flex:1}.site-header,.site-footer{flex:0 0 auto;width:100%;min-width:100vw}.site-header{background:none;position:fixed;z-index:999;padding:5px 5px 0;background:#ffffffe6;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.site-footer{background:var(--cfde-blue);padding:50px;color:#fff;font-size:.9em}.site-body{flex:1;position:relative;overflow-x:clip;font-size:14px;padding:100px 50px 50px}.nav{display:flex;height:60px;border-radius:40px;box-shadow:var(--nav-shadow);position:relative}.nav-left,.nav-title,.nav-right{display:flex;padding:15px}.nav-left{gap:15px}.nav-title{background:var(--cfde-blue);text-decoration:none}.nav-title:hover{background:var(--cfde-lite-blue)}.nav-menu{padding:0 0 0 15px;display:flex;width:100%;flex:1;position:relative}.nav img{height:30px;width:auto}.nav-hamburger{align-self:center;display:none}#hamburger-toggle{opacity:0;cursor:pointer;position:absolute}#hamburger{display:block;padding:.5rem;cursor:pointer;width:var(--hamburger-size);height:var(--hamburger-size);box-sizing:content-box;transition:transform .2s ease}#hamburger .slice{--slice-height: 3px;display:block;position:relative;width:100%;height:var(--slice-height, 2px);border-radius:var(--slice-height);transition:all .2s ease;background-color:var(--cfde-blue);opacity:90%}#hamburger .slice{margin-top:22%;margin-top:calc(33% - var(--slice-height));top:calc((33% - var(--slice-height)) / -2)}.nav-hamburger:has(#hamburger-toggle:checked)+.menu-wrapper{display:flex}#hamburger-toggle:checked~#hamburger .slice:nth-child(1){top:calc(50% - 33% + var(--slice-height) / 2);transform:rotate(45deg)}#hamburger-toggle:checked~#hamburger .slice:nth-child(2){opacity:0}#hamburger-toggle:checked~#hamburger .slice:nth-child(3){top:calc(-50% + var(--slice-height) / 2);transform:rotate(-45deg)}.menu-wrapper{display:flex;width:100%;flex:1;justify-content:space-between}.main-menu{display:flex;width:100%;flex:1;align-items:center}.top-menu{display:flex;width:100%;flex:1;align-items:center;justify-content:flex-end}.title-group{color:#fff;font-weight:700;display:flex;align-items:center}.title-cfde{transform:rotate(-90deg);transform-origin:center;font-size:.7em;line-height:.7em;margin:-.7em}.title-name{line-height:1em}.menu-item-wrapper{position:relative;height:100%}.submenu{position:absolute;top:100%;right:0;padding:10px 15px 15px;border-radius:0 0 10px 10px;width:max-content;display:none;flex-direction:column;gap:5px;background:var(--cfde-blue);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);box-shadow:var(--nav-shadow)}.menu-item-wrapper:hover>.submenu{display:flex}.menu-item{display:flex;align-items:center;font-weight:700;padding:10px;height:100%;white-space:nowrap}.menu-item svg{height:1em;width:autp;margin:0 3px 0 0;object-fit:contain}.menu-item-wrapper:hover .menu-item,.menu-item-wrapper.active .menu-item{background:var(--cfde-blue);color:#fff}.menu-item,.submenu-item{cursor:pointer;font-size:.9em;color:var(--cfde-blue)}.submenu-item{color:#fff;padding:5px}.top-menu .menu-item{font-size:.9em;font-weight:400;border-top:5px solid transparent;border-bottom:5px solid transparent}.top-menu .menu-item:hover{border-top:5px solid var(--cfde-blue);border-bottom:5px solid transparent}.menu-item-wrapper:has(.submenu)>.menu-item:after{content:"";margin:0 0 0 3px;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:6px solid var(--cfde-blue);transform-origin:50% 66.66%;animation:spin 2s linear infinite}.menu-item-wrapper:hover:has(.submenu)>.menu-item:after,.menu-item-wrapper.active:has(.submenu)>.menu-item:after{border-top-color:#fff}a.menu-item,a.submenu-item{text-decoration:none}a.submenu-item:visited{color:#fff}a.submenu-item:hover{color:var(--cfde-lite-blue)}.hero-title{font-size:2.5em;font-weight:700;line-height:1em;letter-spacing:-.02em}.hero-body{font-size:1.1em;line-height:1.2em}@media only screen and (max-width:900px){.site-header:has(#hamburger-toggle:checked){height:100vh}.nav:has(#hamburger-toggle:checked){height:60px;background:#fff;-webkit-backdrop-filter:none;backdrop-filter:none;border-radius:40px 40px 0 0}.nav-menu{justify-content:flex-end}.nav-hamburger{display:flex}.menu-wrapper{position:absolute;top:100%;right:-60px;padding:20px;flex-direction:column-reverse;background:#fff;border-radius:0 0 40px 40px;width:auto;min-width:calc(100vw - 10px);box-shadow:var(--nav-shadow);max-height:calc(100vh - 70px);overflow-y:scroll;display:none}.main-menu{flex-direction:column;align-items:flex-start;flex:auto}.top-menu{flex-direction:column;align-items:flex-start;flex:auto;width:100%}.submenu{display:flex;position:relative;background:#fff;box-shadow:none;padding:5px 20px;width:100%}.menu-item-wrapper{display:flex;flex-direction:column;width:100%}.top-menu .menu-item{border:0;width:100%}.top-menu .menu-item:hover{border:0}.submenu-item{color:var(--cfde-blue)}.submenu-item:hover,.submenu-item.active{background:var(--cfde-blue);color:#fff}.menu-item-wrapper:has(.submenu)>.menu-item:after{display:none}.hero-title{font-size:1.8em}.hero-body{font-size:1em}}.footer-container{display:flex;flex-direction:column;gap:40px;max-width:1200px;margin:0 auto}.footer-nav{display:flex;gap:40px}.footer-nav>*{flex:1}.section{display:flex;flex-direction:column;background:#eee;min-height:100px;width:100%;border-radius:20px;padding:20px}a,a:visited{color:var(--cfde-blue);text-decoration:none}a:hover{color:var(--cfde-lite-blue)}a[target=_blank]:not(:has(img)):after{content:"";display:inline-block;width:1em;height:1em;vertical-align:text-top;background:var(--cfde-blue);-webkit-mask-image:url(./images/icon-external.svg);-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;mask-image:url(./images/icon-external.svg);mask-size:contain;mask-repeat:no-repeat;mask-position:center}button{background:var(--cfde-blue);color:#fff;border:0;font-size:1em;cursor:pointer}button:hover{background:var(--cfde-lite-blue)}button,input,select{border:1px solid #aaa;border-radius:.5em;padding:.5em .8em}select:hover{background:var(--cfde-lite-blue);cursor:pointer;color:#fff}button.lg,input.lg,select.lg{font-size:1.2em}button.sm,input.sm,select.sm{font-size:.8em}input[type=checkbox],input[type=radio]{accent-color:var(--cfde-blue);margin:0}fieldset{border:0;margin:0;padding:0;padding-block:0;padding-inline:0;margin-inline:0}input:disabled,button:disabled,select:disabled{cursor:not-allowed;accent-color:#eee;background:#eee;color:#aaa}.bold{font-weight:700}.no-events{pointer-events:none}.yes-events{pointer-events:all}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(){"use strict";async function n(e){const i=await fetch(e);if(!i.ok)throw new Error("Failed to load site config");return i.json()}function o(){return window.location.pathname}function l(e,i,t){return e.menu.map(s=>{const a=t+s.path,r=i.startsWith(s.path);return`
      <a href="${a}" class="${r?"active":""}">
        ${s.label}
      </a>
    `}).join(""),`
    <header class="site-header">
        <div class="nav">
            <div class="nav-left">
                <img src="${e.cfde_logo}"/>
                <img src="${e.tissue_logo}"/>
            </div>
            <a class="nav-title" href="#">
                <!--<img src="images/title.png" />-->
                <div class="title-group">
                    <div class="title-cfde">CFDE</div>
                    <div class="title-name">${e.tissue}<br/>Resource</div>
                </div>
            </a>
            <div class="nav-menu">
                <div class="nav-hamburger">
                    <input type="checkbox" id="hamburger-toggle" />
                    <label for="hamburger-toggle" id="hamburger">
                        <span class="slice"></span>
                        <span class="slice"></span>
                        <span class="slice"></span>
                    </label>
                </div>
                <div class="menu-wrapper">
                    <div class="main-menu">
                        <div class="menu-item-wrapper">
                            <a class="menu-item" href="#item1">Item 1</a>
                        </div>
                        <div class="menu-item-wrapper" href="#item2">
                            <a class="menu-item" href="#item2">Item 2</a> 
                        </div>
                        <div class="menu-item-wrapper">
                            <a class="menu-item" href="#item3">Item 3</a>
                            <div class="submenu">
                                <a class="submenu-item" href="#subitem1">Subitem 1</a>
                                <a class="submenu-item" href="#subitem2">Subitem 2</a>
                                <a class="submenu-item" href="#subitem3">Subitem 3</a>
                            </div>
                        </div>
                        <div class="menu-item-wrapper">
                            <div class="menu-item">Item 4</div>
                        </div>
                        <div class="menu-item-wrapper">
                            <div class="menu-item">Item 5</div>
                        </div>
                    </div>
                    <div class="top-menu">
                        <div class="menu-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#2C5D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            Search
                        </div>
                        <div class="menu-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#2C5D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#2C5D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            Login
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-right">
                <img src="${e.cfde_wheel}" />
            </div>
        </div>
    </header>
  `}function c(e){return`
    <footer class="site-footer">
      ${e.footer||"© Organization"}
    </footer>
  `}class d extends HTMLElement{async connectedCallback(){const i=this.getAttribute("config")||"config/site-config.json",t=this.getAttribute("base")||"",s=await n(i),a=o(),r=this.innerHTML;this.innerHTML=`
      ${l(s,a,t)}

      <main class="site-content">
        ${r}
      </main>

      ${c(s)}
    `}}customElements.define("site-shell",d)})();
