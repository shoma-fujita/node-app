// モジュールローディングシステム
const http = require('http');

var server = http.createServer(
  // request: クライアントから送られてきた情報を管理するもの
  // response: サーバーから送り出される情報を管理するもの
  (request,response) => {
    response.end('Hello Node.js!');
  }
);

// httpサーバーを待ち受け状態にする = ブラウザからポート番号を入力してアクセスすることができる
server.listen(3000);

// 上記が「Node.jsで、サーバーを使って動かす」という「1,httppの用意 2,createServerでhttp.Serverの作成 3,待ち受け開始」の3つの手順
