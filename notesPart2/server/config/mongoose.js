const mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    mp = path.join(__dirname, './../models');

mongoose.connect('mongodb://localhost/notes323');

fs.readdirSync(mp).forEach(function(file) {
    if (file.indexOf(".js") >= 0) {
        require(mp + "/" + file);
    }
})