var template = require('./template.marko');

module.exports = function(input, out){
    // out.write('Hello ' + input.name);
    var name = input.name;

    if(name) {
        name = name.toUpperCase();
    } else {
        name = 'No name defined!!';
    }

    template.render({
        name: name
    }, out)
};