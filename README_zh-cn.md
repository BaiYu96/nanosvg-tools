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
│   ├── layouts/
│   │   └── Layout.astro        # 全局公共布局（含多语言导航切换）
│   └── pages/                  # 基于文件系统的国际化路由
│       ├── index.astro         # 英文默认主页
│       ├── optimizer/
│       │   └── index.astro     # 英文 SVG 压缩优化页
│       ├── zh/
│       │   ├── index.astro     # 简体中文主页
│       │   └── optimizer/      # 简体中文 SVG 压缩优化页
│       └── de/
│           ├── index.astro     # 德文主页
│           └── optimizer/      # 德文 SVG 压缩优化页
```
## 🗺️ 后续功能规划
我们计划将该项目逐步升级为 "一站式 SVG 万能工具箱"，当前与后续功能包括：

- [x] SVG 压缩优化 (SVG Optimizer): 纯前端集成 SVGO 核心逻辑，快速剔除设计软件导出的冗余元数据。

- [ ] SVG 转组件 (SVG to JSX/TSX): 将原始 SVG 转换为干净的、可直接复制使用的 React/Vue 组件。

- [ ] SVG 精灵图合并 (SVG Sprite): 支持将多个图标批量合并为一个标准的 SVG Sprite 集合文件。

## 📄 开源协议
本项目采用 Apache-2.0 license 开源协议。
