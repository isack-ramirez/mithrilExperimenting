var m = require("mithril");
const noteTemplate = require("./components/noteTemplate");
const header = require("./components/header");
const noteTextArea = require("./components/noteTextArea");

const doneNotes = init();
console.log(doneNotes);

function init() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}

m.mount(headerDiv, header);

m.mount(textArea, noteTextArea);

for (let i = 0; i < 3; i++) {
  var currentDiv = document.createElement(`div${i}`);
  document.body.appendChild(currentDiv);
  console.log(`${doneNotes[i]}`);
  m.mount(currentDiv, {view: function() {return m(noteTemplate,`${doneNotes[i]}`)}});
}
