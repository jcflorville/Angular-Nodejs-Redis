var redis = require("redis"),
    client = redis.createClient();

exports.saveItem = function(req, res) {
  var newItem = {};
  newItem.name = req.body['formItemText'];
  newItem.id = newItem.name.replace(" ", "-");
  client.hset("Item", newItem.id, newItem.name,redis.print);
  res.redirect("back");
};

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partial = function (req, res) {
  var items = [];
  var name = req.params.name;
  client.hgetall("Item", function(err, objs) {
    for(var k in objs) {
      var newTodo = {
        text: objs[k]
      };
      items.push(newTodo);
    }
    res.render('partials/partial' + name, {
      title: 'New List',
      items: items
    });
  });
  // res.render('partials/partial' + name);
};