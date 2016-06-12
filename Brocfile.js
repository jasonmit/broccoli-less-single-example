'use strict';

var Funnel      = require('broccoli-funnel');
var compileLess = require('broccoli-less-single');
var mergeTrees  = require('broccoli-merge-trees');

var app = new Funnel('app');

var less = compileLess(app, 'styles/app.less', 'assets/app.css', {
	paths: ['.', 'bower_components/bootstrap/less']
});

module.exports = mergeTrees([app, less]);
