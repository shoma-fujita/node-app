// テンプレートの読み込みは「1.ファイルの読み込み 2,レンダリング 3,クライアントへの出力」の3つの作業が基本
const http = require('http');
const fs = require('fs');
// ejsオブジェクトの読み込み
const ejs = require('ejs');
 
// テンプレートファイルの読み込み
const index_page = fs.readFileSync('./index.ejs', 'utf8');

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start!');

// ここまでがメインプログラム

// createServerの処理
function getFromClient(request, response) {
  // レンダリング = HTMLファイルへの出力
  var content = ejs.render(index_page, {
    title: "Indexページ",
    content: "これはテンプレートを使ったサンプルページです。",
  });
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(content);
  response.end();
}