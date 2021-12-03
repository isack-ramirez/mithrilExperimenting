var m = require("mithril");

const useState = require('../../state/State')

var State = useState.getState()

console.log(State.notes)


module.exports = {
  view: function () {
    // m('p', `${notetext}`)
    m('p', 'test')
  }
}
    

// const doneNotes = init();
// console.log(doneNotes);

// function init() {
//   var values = [],
//     keys = Object.keys(localStorage),
//     i = keys.length;

//   while (i--) {
//     values.push(localStorage.getItem(keys[i]));
//   }

//   return values;
// }




// for (let i = 0; i < 3; i++) {
//   var currentDiv = document.createElement(`div${i}`);
//   document.body.appendChild(currentDiv);
//   console.log(`${doneNotes[i]}`);
//   m.mount(currentDiv, {

//     view: function () {
//       return m(noteTemplate, `${doneNotes[i]}`);
//     },
//   });
// }