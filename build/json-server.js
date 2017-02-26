var jsonServer = require('json-server');

var server = jsonServer.create()

/*测试  start*/
/*var options = server.options({
  watch: 'db.json'
});
server.use(options)*/
/*测试  end*/

var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/api/test/search', function (req, res) {

    var dataJson = require('../mock/test_search1.js');
    console.log(dataJson)

	   
  	//res.jsonp(dataJson)
    res.jsonp({
      a: 'post111'
    })
});

server.post('/api/test/search', function (req, res) {

    console.log(res)

    var dataJson = require('../mock/test_search2.js');
    //res.jsonp(dataJson)

    res.jsonp({
      a: 'post111'
    })
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running');
  console.log('------ 请访问localhost:3000 请求数据-------')
})

