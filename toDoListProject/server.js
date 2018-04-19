const express = require('express'),
    session = require('express-session'),
    app = express(),
    port = 8000,
    path = require('path'),
    bp = require('body-parser');

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(bp.json());
app.use(session({
    secret: 'kjlkdfdj',
    resave: false,
    saveUninitialized: true
}))


require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`on port ${port}`));