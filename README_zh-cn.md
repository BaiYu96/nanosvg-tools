# ⚡ NanoSVG Tools

![nanosvg](./public/nanosvg-logo-1024.png)

[English](./README.md) | 简体中文

一款基于 Astro 和 Tailwind CSS 构建的轻量、极速、多语言 SVG 开发者工具箱。100% 纯前端本地处理，确保您的设计资产绝不流向网络，完美保护隐私安全。

---

## 🎯 功能特性

- **100% 隐私安全:** 无需上传服务器。所有转码、转义逻辑完全在本地浏览器沙盒内完成。
- **原生多语言支持:** 内置完善的国际化路由（i18n），支持中、英、德三语丝滑切换。
- **实时本地预览:** 即时渲染输入的 SVG 源码，提供所见即所得的预览，并自动进行等比缩放适配。
- **生产级代码输出:** 
  - **CSS Data URI:** 针对 CSS `background-image` 深度优化，对特定关键字符（如 `#`, `{`, `}`, `<`, `>` 等）进行精准转义，避免多浏览器兼容性崩溃。
  - **Base64 字符串:** 标准的 Base64 编码，完美契合 HTML `<img>` 标签的 src 属性。
- **SVG 压缩优化:** 使用 SVGO 在浏览器本地压缩 SVG，支持体积对比、原图与优化后预览。
- **SVG 转 React 组件:** 将 SVG 源码转换为 JSX 或 TSX 组件，并支持 props 透传。
- **SVG Sprite 生成器:** 将多个 SVG 文件合并为基于 symbol 的精灵图和 use 用法代码。
- **图片与文档导出:** 在浏览器本地将 SVG 转换为 PNG、JPG、WebP、PDF 和 ICO，支持拖拽上传、批量转换和 ZIP 下载。
- **极佳交互体验:** 输出文本框支持“点击即全选”以及“一键复制到剪贴板”，大幅提升开发搬砖效率。

---

## 🛠️ 技术栈

- **框架:** [Astro v5+](https://astro.build/) (采用原生 i18n 引擎，零服务器依赖)
- **样式:** [Tailwind CSS v4](https://tailwindcss.com/)
- **部署:** Vercel / Netlify / Cloudflare Pages (完美契合 Jamstack 架构)

---

## 🚀 本地开发指南

### 环境准备
请确保您的本地环境已安装 [Node.js](https://nodejs.org/)（推荐 v18.x 或更高版本）。

### 安装步骤

1. **克隆代码仓库**
```bash
   git clone https://github.com/BaiYu96/nanosvg-tools.git
   cd nanosvg-tools
```
2. **安装依赖项目**

```bash
   npm install
```

3. **启动本地开发服务器**
```bash
   npm run dev
```
启动后在浏览器中访问 `http://localhost:4321` 即可查看运行效果。

4. **生产环境编译打包**
```bash
   npm run build
```

### 📁 项目目录简析
```plaintext
├── src/
│   ├── components/
│   │   └── SvgConverter.astro  # 核心转换组件（内含工业级规范中文技术注释）
│   │   └── SvgOptimizer.astro  # 基于 SVGO 的本地压缩优化组件
│   │   └── SvgComponentConverter.astro
│   │   └── SvgSpriteGenerator.astro
│   ├── layouts/
│   │   └── Layout.astro        # 全局公共布局（含多语言导航切换）
│   └── pages/                  # 基于文件系统的国际化路由
│       ├── index.astro         # 英文默认主页
│       ├── svg2base64/
│       │   └── index.astro     # 英文 SVG 转 Base64 页
│       ├── svg2png/
│       ├── svg2jpg/
│       ├── svg2webp/
│       ├── svg2pdf/
│       ├── svg2icon/
│       ├── optimizer/
│       │   └── index.astro     # 英文 SVG 压缩优化页
│       ├── component/
│       │   └── index.astro     # 英文 SVG 转组件页
│       ├── sprite/
│       │   └── index.astro     # 英文 SVG Sprite 页
│       ├── zh/
│       │   ├── index.astro     # 简体中文工具导航页
│       │   └── svg2base64/     # 简体中文 SVG 转 Base64 页
│       │   └── optimizer/      # 简体中文 SVG 压缩优化页
│       │   └── component/      # 简体中文 SVG 转组件页
│       │   └── sprite/         # 简体中文 SVG Sprite 页
│       └── de/
│           ├── index.astro     # 德文工具导航页
│           └── svg2base64/     # 德文 SVG 转 Base64 页
│           └── optimizer/      # 德文 SVG 压缩优化页
│           └── component/      # 德文 SVG 转组件页
│           └── sprite/         # 德文 SVG Sprite 页
```
## 🗺️ 后续功能规划
我们计划将该项目逐步升级为 "一站式 SVG 万能工具箱"。

### 已完成功能

- [x] SVG 转 Base64: 将 SVG 代码转换为 CSS Data URI 和 Base64 字符串。

- [x] SVG 压缩优化 (SVG Optimizer): 纯前端集成 SVGO 核心逻辑，快速剔除设计软件导出的冗余元数据。

- [x] SVG 转组件 (SVG to JSX/TSX): 将原始 SVG 转换为干净的、可直接复制使用的 React 组件。

- [x] SVG 精灵图合并 (SVG Sprite): 支持将多个图标批量合并为一个标准的 SVG Sprite 集合文件。

- [x] SVG 转 PNG

- [x] SVG 转 JPG

- [x] SVG 转 WebP

- [x] SVG 转 PDF

- [x] SVG 转 Icon

### 计划开发

- [ ] 统一文件拖拽与上传输入：覆盖 Base64、Optimizer、Component、Sprite 等工具。

- [ ] 导出尺寸预设：支持 favicon、App Icon、社交分享图、自定义比例锁定。

- [ ] SVG 颜色替换：识别 fill/stroke，批量替换品牌色，并支持一键转为 `currentColor`。

- [ ] SVG viewBox 与尺寸修复：自动生成缺失 viewBox，移除固定宽高，让 SVG 响应式缩放。

- [ ] SVG 转 CSS Mask：生成 `mask-image` 和 `-webkit-mask-image` 代码片段，方便单色图标换色。

- [ ] SVG 转 Vue / Svelte 组件。

- [ ] Icon Font 生成器：从 SVG 集合生成 WOFF2 字体、CSS class 和预览页面。

- [ ] SVG 安全扫描：检测并清理 `script`、`foreignObject`、事件属性和 `javascript:` 链接。

- [ ] SVG 兼容性检查：检测外链资源、缺失命名空间、filter、mask、clipPath 以及潜在浏览器兼容风险。

## 📄 开源协议
本项目采用 Apache-2.0 license 开源协议。
