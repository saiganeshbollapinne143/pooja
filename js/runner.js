const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Add the missing HTML elements inside the JSDOM string
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <button id="navToggle"></button>
      <div id="navLinks"></div>
    </body>
  </html>
`);

global.window = dom.window;
global.document = dom.window.document;

const mainPath = path.join(__dirname, "main.js");
require(mainPath);