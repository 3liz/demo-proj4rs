import wasm from "vite-plugin-wasm";

export default {
  plugins: [
    wasm()
  ],
  base: './',
  build: {
    sourcemap: true,
    target: 'esnext',
    rollupOptions: {
      input: {
        index: 'index.html',
        'reprojection-image': 'demo-pages/reprojection-image.html',
        'reprojection': 'demo-pages/reprojection.html',
        'sphere-mollweide': 'demo-pages/sphere-mollweide.html',
        'wms-image-custom-proj': 'demo-pages/wms-image-custom-proj.html',
        'vector-projections': 'demo-pages/vector-projections.html',
      },
    },
  },
  server: {
    fs: {
        allow: ['/..']
    }
  }
}
