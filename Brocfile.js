'use strict';

var pickFiles   = require('broccoli-static-compiler');
var compileLess = require('broccoli-less-single');
var mergeTrees  = require('broccoli-merge-trees');

var app = pickFiles('app', {
	srcDir:  '/',
	destDir: '/'
});

var less = compileLess(app, 'styles/app.less', 'assets/app.css', {
	paths: ['.', 'bower_components/bootstrap/less']
})

module.exports = mergeTrees([app, less]);
