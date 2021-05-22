const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const { stderr, stdout } = require('./morgan');

module.exports = (app) => {
	app.use(stderr);
	app.use(stdout);
	app.use(fileUpload());
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(express.static(path.join(__dirname, '../../public')));
};
