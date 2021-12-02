var m = require("mithril");

var state = {
  count: 0,
  text: "Note here",
  update: function (value) {
    state.text = value;
  },
};

module.exports = {
  view: function () {
    return m(
      "div.noteTextAreaWrapper",
      { class: "textAreaWrapper" },

      m("textarea.input", {
        oninput: function (e) {
          state.update(e.target.value);
        },
        value: state.text,
        class: "noteText",
      }),
      m("div.noteSubmitButton",
      
      m('button',{
          onclick: function(e){
             console.log(state.text);
             state.count++;
             window.localStorage.setItem(state.count,state.text)

          }
      })

      )
    );
  },
};
