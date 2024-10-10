import wasm from "vite-plugin-wasm";
import copy from 'rollup-plugin-copy';

export default {
  plugins: [
    wasm()
  ],
  base: './',
  build: {
    sourcemap: true,
    target: 'esnext',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: 'index.html',
        'reprojection-image': 'demo-pages/reprojection-image.html',
        'reprojection': 'demo-pages/reprojection.html',
        'sphere-mollweide': 'demo-pages/sphere-mollweide.html',
        'wms-image-custom-proj': 'demo-pages/wms-image-custom-proj.html',
        'vector-projections': 'demo-pages/vector-projections.html',
        'bundeslander-3044': 'demo-pages/bundeslander-3044.html',
      },
      plugins: [
        copy({
          targets: [
            { src: 'fgb/axis_orientation_neu_3044.fgb', dest: './dist/fgb' },
          ]
        })
      ]
    },
  },
  server: {
    fs: {
        allow: ['/..']
    }
  }
}
