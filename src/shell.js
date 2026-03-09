import { loadConfig } from "./utils/config-loader.js"
import { resolveAsset } from "./utils/resolve-asset.js"
import { buildHeader } from "./header.js"
import { buildFooter } from "./footer.js"

export async function initShell() {

  const headerContainer = document.getElementById("site-header")
  const footerContainer = document.getElementById("site-footer")

  if (!headerContainer || !footerContainer) return

  const configUrl = headerContainer.dataset.config || resolveAsset("config/site-config.json")
  const base = headerContainer.dataset.base || ""

  const config = await loadConfig(configUrl)
  const currentPath = window.location.pathname;

  headerContainer.innerHTML = buildHeader(config, currentPath, base)
  footerContainer.innerHTML = buildFooter(config)
}