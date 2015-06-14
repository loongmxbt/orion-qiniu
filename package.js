Package.describe({
    name: 'loongmxbt:orion-qiniu',
    version: '0.0.1',
    summary: 'Qiniu cloud storage wrapper for Orion Filesystem',
    git: 'https://github.com/loongmxbt/orion-qiniu',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'orionjs:core@1.1.0',
        'orionjs:filesystem@1.1.0',
        'orionjs:config@1.1.0',
        'loongmxbt:meteor-qiniu',
        'underscore'
    ]);

    api.addFiles('orion-qiniu.js');
});



Package.onTest(function(api) {
    api.use('tinytest');
    api.use('loongmxbt:orion-qiniu');
    api.addFiles('orion-qiniu-tests.js');
});
