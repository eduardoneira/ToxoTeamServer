function Router(verbose=true) {
  this.express_router = require('express').Router();
  if (verbose) {
    this.express_router.use(function timeLog (req, res, next) {
      var path = require('path');
      var scriptName = path.basename(__filename);
      console.log('Time callback of',scriptName,' with url ',req.url,': ', Date.now());
      next();
    });
  }

  this.get = function(uri, callback) {
    this.express_router.get(uri, callback);
  }

  this.post = function(uri, callback) {
    this.express_router.post(uri, callback);
  }
  
}

module.exports = new Router();