const express = require('express'),
    bp = require('body-parser'),
    port = 8000,
    path = require('path'),
    app = express();

app.use(bp.json());
app.use(express.static(path.join(__dirname, './public/dist')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})