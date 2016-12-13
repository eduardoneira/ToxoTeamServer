var express = require('express');
var app = express();


/** TODO : remove this 
var ref = admin.database().ref('players/test');

ref.once("value")
  .then(function(snapshot){
    var score  = snapshot.child("score").val();
    console.log("Cosas en firebase")
    console.log(score);
  });
*/

/**
 * All URI and requests
 */
var users  = require('./server/users/users.js');

app.use('/users',users);

/**
 * Server ip config and deploy
 */

var regexIP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;
var ip = "127.0.0.1";

if (regexIP.test(process.argv[1])) {
    ip = process.argv[1];
}

var server = app.listen(16081,ip,function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

