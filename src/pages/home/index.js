var template = require('./template.marko');

module.exports = function(req, res){
    template.render({
        name: 'Srini',
        colors: ['red','green', 'blue']
    }, res);
};