import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const prodMock = true;
    return {
        // base: '/',
        base: command === 'serve' ? '/' : './',
        plugins: [
            vue(),
            AutoImport({
                imports: ['vue', 'vue-router', 'pinia'], // 需要自动导入
                dts: 'src/auto-imports.d.ts'
            })
        ],
        resolve: {
            alias: {
                '@': resolve('./src')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "./src/styles/variables.scss";`
                }
            }
        },
        server: {
            port: 80,
            open: false
            // proxy: {
            //     '/api': {
            //         target: 'http://xxxxxx',
            //         changeOrigin: true,
            //         ws: true,
            //         rewrite: (path) => path.replace(new RegExp('^/api'), '')
            //     }
            // }
        },
        build: {
            // 浏览器兼容性  "esnext"|"modules"
            target: 'modules',
            // 指定输出路径
            outDir: 'dist',
            // 禁用 CSS 代码拆分,将整个项目中的所有 CSS 将被提取到一个 CSS 文件中
            cssCodeSplit: false,
            // 构建后是否生成 source map 文件
            sourcemap: false,
            // chunk 大小警告的限制（以 kbs 为单位）
            // chunkSizeWarningLimit: 1024,
            // 当设置为 true，构建后将会生成 manifest.json 文件
            manifest: false,
            // 指定使用哪种混淆器  false 可以禁用最小化混淆   terser  esbuild
            // minify: false,
            terserOptions: {
                compress: {
                    // drop_console: true,//打包移出console
                    drop_debugger: true // 打包移出debugger
                }
            },
            rollupOptions: {
                output: {
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                    assetFileNames: '[ext]/[name]-[hash].[ext]'
                }
            }
        }
    };
});
