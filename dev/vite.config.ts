import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
// import svgr from 'vite-plugin-svgr';
import reactSvg from 'vite-plugin-react-svg';

import { compilerOptions } from './alias.json';

const { paths: alias } = compilerOptions;

const getAlias = () => {
  const aliasKeys = Object.keys(alias).map(key => key.replace('/*', ''));
  //  @ts-expect-error
  const aliasPath = Object.values(alias).map(value => value[0].replace('/*', ''));
  //  @ts-expect-error
  const aliasMapped = Object.fromEntries(
    //  @ts-expect-error
    aliasKeys.map((key, index) => [key, path.resolve(__dirname, aliasPath[index])]),
  );

  return aliasMapped;
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), reactSvg()],
  resolve: {
    alias: getAlias(),
  },
});
