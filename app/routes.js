module.exports = function (app) {

  app.post('/users', function (req, res) {
     res.json(req.body);
  });

  app.get('*', function (req, res) {
      res.sendFile(__dirname + '/public/index.html');
  });
};
