# Site Shell

A lightweight **framework-agnostic website shell** that provides a shared header, navigation, and footer across multiple applications.

The shell is distributed as a single JavaScript file and can be embedded in **any website**, regardless of framework (React, Vue, static HTML, etc.).

It is designed to allow multiple teams to share common site structure and navigation while still building their applications independently.

---

## What it does

This project provides:

* A shared **header**
* Centralized **navigation**
* A shared **footer**
* Config-driven menus via a JSON file
* A single embeddable script
* Compatibility with any frontend framework

The shell wraps the content of a page and injects the common layout automatically.

---

## How it works

The shell is loaded via a script tag and applied using a `<site-shell>` element.

When the page loads the component:

1. Loads the site configuration JSON
2. Builds the header and navigation
3. Wraps the existing page content
4. Adds the footer

Your application content remains inside the shell.

---

## Installation

No build tools or npm dependencies are required for consumers.

Simply include the script from GitHub Pages (or your hosting location).

```
<script src="https://a-shilin.github.io/site-shell/site-shell.js"></script>
```

---

## Usage

Wrap your application content with `<site-shell>` and provide a configuration file.

Basic HTML Example:

```
<!DOCTYPE html>
<html>
<head>
  <script src="https://a-shilin.github.io/site-shell/site-shell.js"></script>

  <style>
    .my-content {
      padding: 0 50px 100px;
    }
  </style>
</head>

<body>

<div class="site-shell">
  <div id="site-header" data-config=""https://a-shilin.github.io/site-shell/config/site-config.json"></div>
  <div id="my-content">
    <h1>Hello</h1>
  </div>
  <div id="site-footer"></div>
</div>

</body>
</html>
```

---

## Configuration

Navigation and other shared elements are defined in a JSON configuration file.

Example:

```
{
    "cfde_logo": "assets/cfde.png",
    "tissue_logo": "assets/liver.png",
    "cfde_wheel": "assets/cfde_unified_icon.png",

    "tissue": "Liver",

    "menu": [
        { "label": "Home", "path": "/" },
        { "label": "Docs", "path": "/docs" },
        { "label": "API", "path": "/api" }
    ],

    "footer": "© Broad Institute"
}
```

---

## Using with Frameworks

The shell works with any frontend framework because it is implemented as a standard Web Component.

### Vue 2 Example

Include the script in your main HTML template (for example `index.html`):

```
<script src="https://a-shilin.github.io/site-shell/site-shell.js"></script>
```

Then wrap your Vue mount point with the shell:

```
<div class="site-shell">
  <div id="site-header" data-config=""https://a-shilin.github.io/site-shell/config/site-config.json"></div>
  <div id="my-content">
    <h1>Hello</h1>
  </div>
  <div id="site-footer"></div>
</div>
```

Vue will mount normally inside `#app`, and the shell will provide the shared header and footer.

---

### React Example

Add the script to your main HTML file (for example `public/index.html` in a Create React App or Vite project):

```
<script src="https://a-shilin.github.io/site-shell/site-shell.js"></script>
```

Then wrap the React root element:

```
<div class="site-shell">
  <div id="site-header" data-config=""https://a-shilin.github.io/site-shell/config/site-config.json"></div>
  <div id="my-content">
    <h1>Hello</h1>
  </div>
  <div id="site-footer"></div>
</div>
```

React will render its application into `#root` while the shell handles the shared site layout.

---


## Development

Install dependencies:

```
npm install
```

Build the distributable script:

```
npm run build
```

The build output will appear in:

```
dist/
```

---

## Deployment

The project is deployed using **GitHub Pages** with a GitHub Actions workflow that automatically builds the project and publishes the contents of the `dist` folder.

After deployment the shell is available at:

```
https://a-shilin.github.io/site-shell/site-shell.js
```

---

## Intended Use

This project is intended to provide a **shared site wrapper** for multiple independent applications, enabling teams to:

* Maintain a consistent header and navigation
* Share branding and layout
* Develop applications independently
* Avoid framework-specific component libraries
