// quasar.config.js
import { defineConfig } from '#q-app/wrappers';

export default defineConfig((/* ctx */) => {
  return {
    // Archivos de arranque (boot files)
    boot: [],

    // Archivos CSS globales
    css: ['app.scss'],

    // Iconos y fuentes adicionales
    extras: [
      'roboto-font', // Fuente Roboto
      'material-icons', // Iconos de Material Icons
    ],

    // Configuración de construcción
    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },
      vueRouterMode: 'hash', // Modo de enrutamiento (hash/history)
      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    // Configuración del servidor de desarrollo
    devServer: {
      open: true, // Abrir automáticamente en el navegador
    },

    // Configuración del framework Quasar
    framework: {
      config: {}, // Configuración adicional del framework
      plugins: [], // Plugins de Quasar
    },

    // Animaciones
    animations: [],

    // Configuración de SSR (Server-Side Rendering)
    ssr: {
      prodPort: 3000, // Puerto de producción
      middlewares: ['render'], // Middlewares
      pwa: false, // Desactivar PWA para SSR
    },

    // Configuración de PWA (Progressive Web App)
    pwa: {
      workboxMode: 'GenerateSW', // Modo de Workbox
    },

    // Configuración de Cordova
    cordova: {
      // Opciones de Cordova
    },

    // Configuración de Capacitor
    capacitor: {
      hideSplashscreen: true, // Ocultar pantalla de inicio
    },

    // Configuración de Electron
    electron: {
      preloadScripts: ['electron-preload'], // Scripts de preload
      inspectPort: 5858, // Puerto de inspección
      bundler: 'packager', // Bundler (packager o builder)
      packager: {
        // Opciones de Electron Packager
      },
      
      builder: {
        appId: 'registrovehicular', // ID de la aplicación
      },
    },

    // Configuración de extensiones de navegador (BEX)
    bex: {
      extraScripts: [], // Scripts adicionales
    },
  };
});
