import { getScriptBase } from "./script-base.js"

/*
Resolves asset paths from config in header.js and footer.js
allows multiple ways to specify asset paths
*/
export function resolveAsset(path) {

  if (!path) return ""

  // absolute URLs (e.g. https://.../logo.png)
  if (/^(https?:)?\/\//.test(path)) {
    return path
  }

  // host-root paths (e.g. /assets/logo.png)
  if (path.startsWith("/")) {
    return path
  }

  // widget-relative paths (e.g. assets/logo.png)
  const base = getScriptBase()

  return base + path
}