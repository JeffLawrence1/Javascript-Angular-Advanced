const mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path');

mongoose.connect('mongodb://localhost/butlist435', { useMongoClient: true });
mongoose.Promise = global.Promise;

const mp = path.join(__dirname, '/../models');

fs.readdirSync(mp).forEach(function(file) {
    if (file.indexOf('.js') > 0) {
        require(mp + '/' + file);
    }
});