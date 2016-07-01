/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',

    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',

    '@angular2-material': 'node_modules/@angular2-material'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    '@angular2-material/core': { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
    '@angular2-material/toolbar': { format: 'cjs', defaultExtension: 'js', main: 'toolbar.js' },
    '@angular2-material/sidenav': { format: 'cjs', defaultExtension: 'js', main: 'sidenav.js' },
    '@angular2-material/list': { format: 'cjs', defaultExtension: 'js', main: 'list.js' },
    '@angular2-material/progress-circle': { format: 'cjs', defaultExtension: 'js', main: 'progress-circle.js' },
    '@angular2-material/card': { format: 'cjs', defaultExtension: 'js', main: 'card.js' },
    '@angular2-material/button': { format: 'cjs', defaultExtension: 'js', main: 'button.js' },
    '@angular2-material/icon': { format: 'cjs', defaultExtension: 'js', main: 'icon.js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'forms',
    'platform-browser',
    'platform-browser-dynamic',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };
  
  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
