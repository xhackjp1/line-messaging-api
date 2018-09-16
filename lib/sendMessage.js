var request = require('request');

exports.send = function(req, messages) {
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {' + process.env.LINE_CHANNEL_ACCESS_TOKEN + '}',
  };

  // 送信データ作成
  var data = {
    'replyToken': req.body['events'][0]['replyToken'],
    'messages': messages
  };

  //オプションを定義
  var options = {
    url: 'https://api.line.me/v2/bot/message/reply',
    proxy: process.env.FIXIE_URL,
    headers: headers,
    json: true,
    body: data
  };

  request.post(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('リクエスト成功');
    } else {
      console.log('エラー: ' + JSON.stringify(response));
    }
  });
}
