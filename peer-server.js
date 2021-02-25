// require("dotenv").config();
var fs = require("fs");
var PeerServer = require("peer").PeerServer;

if (true) {
  var config = { port: 8086 };
} else if (process.env.APP_ENV === "production") {
  var config = {
    port: 8086,
    ssl: {
      key: fs.readFileSync("./tls.key"),
      cert: fs.readFileSync("./tls.crt"),
    },  
  } 
}

var server = PeerServer(config);