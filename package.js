// Based on https://www.discovermeteor.com
Package.describe({
  summary: "Bootstrap 3 compatible error messaging",
  version: "1.0.0",
  git: "https://github.com/bruz/meteor-bootstrap3-errors"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.add_files(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('bruz:bootstrap3-errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.add_files('errors_tests.js', 'client');
});
