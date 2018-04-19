const Users = require('../controllers/users'),
    Buckets = require('../controllers/buckets'),
    path = require('path');

module.exports = function(app) {
    app.post('/users', Users.create);
    app.delete('/users', Users.logout);
    app.get('/session', Users.session);
    app.get('/users', Users.index);

    app.post('/buckets', Buckets.create);
    app.get('/buckets', Buckets.index);
    // app.get('/buckets/:id', Buckets.show);
    app.delete('/buckets/:id', Buckets.destroy);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}