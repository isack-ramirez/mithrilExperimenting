var m = require("mithril");

module.exports = {
  view: function () {

    return m(
      "div.headerWrapper",
      m(
        "h1",

        { class: "header" },

        "Note Taker"
        
      )
    );
  },
};
