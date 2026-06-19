import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 💡 关键：改用全新的 vite 专用插件包

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // 保持不变
  },
  // 💡 新增：i18n 国际化配置
  i18n: {
    defaultLocale: 'en', // 默认语言（根目录 / 对应的语言）
    locales: ['en', 'zh', 'de'], // 支持的语言列表
    routing: {
      prefixDefaultLocale: false, // 默认语言（英文）不需要在 URL 前面加 /en/，保持干净的 /
    }
  }
});