const http = require('http');

var server = http.createServer(
  (request, response) => {
    // header情報の設定
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html><html lang="ja">');
    response.write('<head><meta charset="utf-8">');
    response.write('<title>Hello</title></head>');
    response.write('<body><h1>Hello Node.js!</h1>');
    response.write('<p>This is sample page!</p>');
    response.write('<p>これは、Node.jsのサンプルページです</p>');
    response.write('</body></html>');
    response.end();
  }
);

server.listen(3000);
console.log('server start!');