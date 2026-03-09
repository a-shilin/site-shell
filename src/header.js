
import { resolveAsset } from "./utils/resolve-asset.js"

export function buildHeader(config, currentPath, base) {

    /*
  const nav = config.menu.map(item => {

    const fullPath = base + item.path
    const active = currentPath.startsWith(item.path)

    return `
      <a href="${fullPath}" class="${active ? "active" : ""}">
        ${item.label}
      </a>
    `
  }).join("")
  */

  return `
    <header class="site-header">
        <div class="nav">
            <div class="nav-left">
                <img src="${resolveAsset(config.cfde_logo)}"/>
                <img src="${resolveAsset(config.tissue_logo)}"/>
            </div>
            <a class="nav-title" href="#">
                <!--<img src="images/title.png" />-->
                <div class="title-group">
                    <div class="title-cfde">CFDE</div>
                    <div class="title-name">${config.tissue}<br/>Resource</div>
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
                <img src="${resolveAsset(config.cfde_wheel)}" />
            </div>
        </div>
    </header>
  `


  return `
    <header class="site-header">

      <img class="logo" src="${config.logo}" />

      <nav class="site-nav">
        ${nav}
      </nav>

    </header>
  `
}