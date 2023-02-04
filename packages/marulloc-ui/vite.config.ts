import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import dts from 'vite-plugin-dts';
import rollupTs from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // dts({
        //     insertTypesEntry: true,
        //     // rollupTypes: true,
        //     // noEmitOnError: true,
        // }),
        {
            ...rollupTs({
                check: true,
                tsconfig: './tsconfig.json',
                tsconfigOverride: {
                    noEmits: true,
                },
            }),
            // run before build
            enforce: 'pre',
        },
    ],

    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'Marulloc-UI',
            // formats: ['es', 'umd'],
            fileName: (format) => `marulloc-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});
