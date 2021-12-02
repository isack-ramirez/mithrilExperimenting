
var m = require('mithril');
const testButton = require('./components/button');
const header = require('./components/header')




m.mount(headerDiv,  header  );



m.mount(test2, testButton);

for(let i=0;i<3;i++){
    console.log('hello')

    var currentDiv = document.createElement(`div${i}`)
    document.body.appendChild(currentDiv)
    
    m.mount(currentDiv, testButton)
}

