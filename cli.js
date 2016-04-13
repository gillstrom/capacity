#!/usr/bin/env node
'use strict';
const meow = require('meow');
const toPercent = require('to-percent');
const fn = require('./');

meow(`
	Full charge capacity refers to the amount of power as measured in mAh (milliampere-hours) the battery is capable of containing. This number lowers as the battery becomes depleted with usage and age.',

	Usage
	  $ capacity
`);

fn().then(res => console.log(toPercent(res) + '%'));
