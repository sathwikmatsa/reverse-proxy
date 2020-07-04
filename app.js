const PORT = process.env.PORT || 8213;
console.log("PORT ENV: ", PORT);

const http = require("http");
const httpProxy = require("http-proxy");
console.log("libs ok");

const proxy = httpProxy.createProxyServer({});
console.log("proxy ok");

http
  .createServer(function (req, res) {
    proxy.web(req, res, { target: req.url });
  })
  .listen(PORT);
console.log("server ok");
