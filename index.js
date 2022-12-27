const bouncy = require("bouncy");

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const ports = [4100, 4101, 4102, 4103, 4104];
let i = 0;

var server = bouncy(function (req, res, bounce) {
  const port = ports[between(0, ports.length)];

  console.log("request " + i + " sending to -> ", port);
  i++;
  bounce(port);
});

server.listen(4000);
