let SCRIPT_BASE = ""

/*
Determine the base URL of the script that loaded this widget.
Works even after bundling with Vite.
*/
export function initScriptBase() {

  if (SCRIPT_BASE) return SCRIPT_BASE

  const script =
    document.currentScript ||
    document.querySelector('script[src*="site-shell"]')

  if (!script) {
    console.warn("site-shell: could not determine script base path")
    return ""
  }

  const url = new URL(script.src)

  SCRIPT_BASE = url.href.substring(0, url.href.lastIndexOf("/") + 1)

  return SCRIPT_BASE
}

export function getScriptBase() {
  return SCRIPT_BASE
}