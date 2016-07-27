module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // Polyfills.
      'node_modules/core-js/client/shim.min.js',

      'node_modules/reflect-metadata/Reflect.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js dependencies
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },


      { pattern: 'karma-test-shim.js', included: true, watched: true },

      // paths loaded via module imports
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true },

      //import material2 tools
      { pattern: 'node_modules/@angular2-material/**/*.js', included: false, watched: true },
      { pattern: 'node_modules/@angular2-material/**/*.js.map', included: false, watched: true },

      //application code      
      { pattern: 'app/**/*.js', included: false, watched: true },
      { pattern: 'app/**/*.html', included: false, watched: true },
      { pattern: 'app/**/*.css', included: false, watched: true },
      { pattern: 'app/**/*.ts', included: false, watched: false },
      { pattern: 'app/**/*.js.map', included: false, watched: false },

      //path to the tests
      { pattern: 'test/**/*.js', included: false, watched: true },
      { pattern: 'test/**/*.ts', included: false, watched: true },
      { pattern: 'test/**/*.js.map', included: false, watched: true }
    ],

    // proxied base paths make sure the template and css urls get redirected to /base/...
    proxies: {
      "/src/": "/base/src/",
      "/demo/": "/base/demo/"
    },

    reporters: ['verbose'],
    port: 9877,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
