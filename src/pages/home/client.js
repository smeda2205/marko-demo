// var hello = require('./hello');
//
// var message = hello('Srini');
//
// alert(message);

var template = require('./client.marko');

template.render({
    name : 'Srini'
}, function(err, html){
    var div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
});