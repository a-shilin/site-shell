import { loadConfig } from "./config-loader.js"
import { getCurrentPath } from "./utils/router.js"
import { buildHeader } from "./header.js"
import { buildFooter } from "./footer.js"

class SiteShell extends HTMLElement {

  async connectedCallback() {

    const configUrl = this.getAttribute("config") || "config/site-config.json"
    const base = this.getAttribute("base") || ""

    const config = await loadConfig(configUrl + "?v=" + Date.now())
    const currentPath = getCurrentPath()

    // Capture existing children
    const content = this.innerHTML

    this.innerHTML = `
      ${buildHeader(config, currentPath, base)}

      <main class="site-content">
        ${content}
      </main>

      ${buildFooter(config)}
    `
  }
}

customElements.define("site-shell", SiteShell)