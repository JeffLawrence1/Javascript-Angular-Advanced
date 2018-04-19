const express = require('express'),
    app = express(),
    bp = require('body-parser'),
    port = 8000,
    path = require('path');

app.use(bp.json());
app.use(express.static(path.join(__dirname, './public/dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, () => {
    console.log(`We are listening on port ${port}`);
})