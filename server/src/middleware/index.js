const express = require('express');
const path = require('path');
const { stderr, stdout } = require('./morgan');

module.exports = (app) => {
	app.use(stderr);
	app.use(stdout);
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(express.static(path.join(__dirname, 'public')));
};
