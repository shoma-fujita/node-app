var data2 = {
'Taro': ['taro@yamada', '09-999-999', 'Tokyo'],
'Hanako': ['hanako@flower', '080-888-888', 'Yokohama'],
'Sachiko': ['sachi@happy', '070-777-777', 'Nagoya'],
'Ichiro': ['ichi@baseball', '060-666-666', 'USA'],
}

// otherのアクセス処理
function response_other(request, response) {
var msg = "これはOtherページです。"
var content = ejs.render(other_page, {
title: "Other",
content: msg,
data: data2,
filename: 'data_item'
});
response.writeHead(200, { 'Content-Type': 'text/html' });
response.write(content);
response.end();
}