var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

module.exports = function (name, publicPath) {
  publicPath = publicPath || './public';

  var app = express();

  var id = 0;
  var data = {};

  app.use(bodyParser.json());
  app.use(express.static(publicPath));

  app.route('/api/' + name)
    .get(function (req, res) {
      res.json(Object.keys(data).map(function (key) {
        return data[key];
      }));
    })
    .post(function (req, res) {
      var record = req.body;
      record.id = ++id;
      data[record.id] = record;
      res.json(record);
    });

  app.route('/api/' + name + '/:id')
    .get(function (req, res) {
      res.json(data[req.params.id]);
    })
    .put(function (req, res) {
      data[req.params.id] = req.body;
      res.json(req.body);
    })
    .delete(function (req, res) {
      delete data[req.params.id];
      res.json(null);
    });

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, publicPath, 'index.html'));
  });

  return app;
};
