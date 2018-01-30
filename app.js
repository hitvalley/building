const path = require('path');
const ValleyServer = require('valley-server');

const server = new ValleyServer();

server.staticPath(path.join(__dirname, 'assets/static'));
server.use('/', async function(next) {
  let res = this.context.res;
  console.log(res.state)
  if (res && res.state == 404) {
    this.context.text('404');
    await next();
  }
});

server.listen(3002).then(res => {
  console.log('http://localhost:3002/html/index.html');
});
