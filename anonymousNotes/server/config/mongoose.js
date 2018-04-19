const mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    mp = path.join(__dirname, './../models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/anonnote43');

fs.readdirSync(mp).forEach(function(file) {
    if (file.indexOf(".js") >= 0) {
        require(mp + "/" + file);
    }
})