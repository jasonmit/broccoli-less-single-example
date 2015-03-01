'use strict';

var pickFiles   = require('broccoli-static-compiler');
var compileLess = require('broccoli-less-single');
var mergeTrees  = require('broccoli-merge-trees');

var appTree = pickFiles('app', {
	srcDir:  '/',
	destDir: '/'
});

var bootstrapTree = pickFiles('bower_components', {
	srcDir:  '/',
	destDir: 'bower_components'
});

var app = mergeTrees([appTree, bootstrapTree]);

var lessTree = compileLess(app, 'styles/app.less', 'assets/app.css', {
	paths: ['.', 'bower_components/bootstrap/less']
})

module.exports = mergeTrees([app, lessTree]);
