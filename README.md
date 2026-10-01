<div align="center">

<img src="public/hsc-logo.png" alt="Heidelberger SC Logo" width="110" />

# 💛 Heidelberger Sport-Club

### *Die Raute im Herzen*

<p>
  <img src="https://img.shields.io/badge/Astro-FFB5C8?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/React-A8D8EA?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-C3B1E1?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/Decap%20CMS-FFE5A0?style=for-the-badge&logoColor=white" alt="Decap CMS (planned)" />
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Work%20in%20progress-FCFE58?style=flat-square&labelColor=333333" alt="Status" />
  <img src="https://img.shields.io/badge/License-All%20rights%20reserved-FFB5C8?style=flat-square&labelColor=333333" alt="License" />
</p>

**🌐 Live preview:** [varsha1206.github.io/Heidelberger-Sportclub](https://varsha1206.github.io/Heidelberger-Sportclub/)

</div>

---

## 🌸 About

The new website of the **Heidelberger Sport-Club**: a modern, fast and mobile-friendly
replacement for the old Wix site, covering football, tennis, table tennis and volleyball.

## ✨ Features

- 🧭 Fixed header with a Sportarten mega menu (and a tap-to-expand menu on mobile)
- 🖼️ Hero section with a slow, blurred background slideshow
- 💬 "Über uns" section with a membership call to action
- 📍 Compact footer with address and contact link
- 📱 Responsive from phone to desktop
- 🗂️ *Planned:* sport pages, Plachky tournament, sponsors, contact and Decap CMS

## 🧁 Tech Stack

| Layer | Tool |
| :--- | :--- |
| 🌈 Framework | [Astro](https://astro.build) |
| 💙 Components | [React](https://react.dev) |
| 💜 Hosting | GitHub Pages (via GitHub Actions) |
| 💛 Content editing | Decap CMS *(planned)* |

## 🎨 Colours

| Use | Colour |
| :--- | :--- |
| 🖤 Header, About section | `#000000` |
| 💛 Accent and headings | `#fcfe58` |
| 🤍 Page background and text | `#ffffff` |
| 🩶 Footer | `#2b2b2b` |

## 🚀 Getting Started

You need **Node.js 20 or newer**.

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

The dev server prints its address in the terminal. Note that the site lives under
the base path `/Heidelberger-Sportclub/`.

## 📁 Project Structure

```
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/                        # logo, hero and about images
├── src/
│   ├── components/                # Header, Hero, About, Footer
│   ├── layouts/Layout.astro       # shared page layout
│   └── pages/index.astro          # homepage
├── astro.config.mjs
└── package.json
```

## 🌍 Deployment

Every push to `main` is built and deployed automatically with GitHub Actions.
In the repository, **Settings → Pages → Source** must be set to **GitHub Actions**.

---

## 📜 Copyright & License

**All rights reserved.**

Copyright © 2026 Heidelberger Sport-Club. All rights reserved.

This repository, including but not limited to all source code, design
documents, data models, documentation, user interface designs, and any
associated assets, is the exclusive property of HSC. No part of this
repository may be copied, reproduced, distributed, modified, or used,
in whole or in part, for any purpose without prior written permission
from HSC.

The Heidelberger Sport-Club name, crest, colors, and any associated branding referenced or
displayed within this project are the property of HSC and are not
licensed for use outside of this project under any circumstance.

No license, express or implied, is granted to any third party under
this repository. This project is not open source.

<div align="center">

<sub>Made with 💛 in Heidelberg</sub>

</div>