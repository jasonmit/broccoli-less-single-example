'use strict';

var pickFiles  = require('broccoli-static-compiler');
var compileLess = require('broccoli-less-single');
var mergeTrees = require('broccoli-merge-trees');

var appTree = pickFiles('app', {
	srcDir:  '/',
	destDir: '/'
});

var lessTree = compileLess(appTree, 'styles/app.less', 'styles/app.css')

module.exports = mergeTrees([appTree, lessTree]);
