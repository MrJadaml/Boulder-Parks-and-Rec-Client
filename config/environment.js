/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'parks-client',
    environment: environment,
    baseURL: '/',
    adapterURL: process.env.ADAPTER_URL,
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' http://maps.googleapis.com/ http://maps.gstatic.com/maps-api-v3/api/js/18/20/main.js http://mt0.googleapis.com http://mt1.googleapis.com http://maps.gstatic.com http://csi.gstatic.com ",
      'font-src': "'self' http://fonts.gstatic.com",
      'connect-src': "'self' localhost:3000",
      'img-src': "'self' http://mt1.googleapis.com http://mt0.googleapis.com http://maps.googleapis.com http://maps.gstatic.com http://csi.gstatic.com",
      'style-src': "'self' http://fonts.googleapis.com http://fonts.googleapis.com",
      'media-src': "'self'"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
