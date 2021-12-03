var m = require("mithril");
const noteTemplate = require("./components/noteTemplate");
const header = require("./components/header");
const noteTextArea = require("./components/noteTextArea");





m.mount(headerDiv, header);

m.mount(textArea, noteTextArea);

m.mount(test, noteTemplate);

module.exports = {
  test : 'fucking work'
}
