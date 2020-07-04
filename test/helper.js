const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = (new JSDOM('<!doctype html><html><body><article><section id="header"><header><h1>Augmented.js Next Presentation - Mocha Tests</h1><h2 id="augmented" data-testView="version"></h2></header></section></article><div id="sandbox"></div></body></html>')).window;

global.Buffer = global.Buffer || require('buffer').Buffer;

if (typeof btoa === 'undefined') {
  global.btoa = function (str) {
    return new Buffer(str, 'binary').toString('base64');
  };
}

if (typeof atob === 'undefined') {
  global.atob = function (b64Encoded) {
    return new Buffer(b64Encoded, 'base64').toString('binary');
  };
}

global.document = dom.document;
global.window = dom.window;
global.navigator = {
  userAgent: 'node.js'
};

global.Chart = require("../dist/presentation-chart.js");

const chai = require("chai");
global.chai = chai;
global.expect = chai.expect;
