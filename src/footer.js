export function buildFooter(config) {

  return `
    <footer class="site-footer">
      ${config.footer || "© Organization"}
    </footer>
  `
}