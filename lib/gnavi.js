var request = require('request');

exports.api = function(json, search_place, callback) {

  const gnavi_url = 'http://api.gnavi.co.jp/RestSearchAPI/20150630/';
  var keyword_array = "";
  var gnavi_keyword = "";

  // 受信テキスト
  var search_place_array = search_place.split("\n");

  //検索キーワード
  if (search_place_array.length == 2) {
    keyword_array = search_place_array[1].split("、");
    gnavi_keyword = keyword_array.join();
  }

  // ぐるなびAPI レストラン検索API
  // ぐるなび リクエストパラメータの設定
  var gnavi_query = {
    "keyid": process.env.GNAVI_API_KEY,
    "format": "json",
    "address": search_place_array[0],
    "hit_per_page": 1,
    "freeword": gnavi_keyword,
    "freeword_condition": 2
  };
  var gnavi_options = {
    url: gnavi_url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    qs: gnavi_query,
    json: true
  };

  // 検索結果をオブジェクト化
  var search_result = {};

  request.get(gnavi_options, function(error, response, body) {
    if (error || response.statusCode != 200) {
      console.log('error: ' + response.statusCode);
      return;
    }
    if ('error' in body) {
      console.log("検索エラー" + JSON.stringify(body));
      return;
    }
    // 店名
    if ('name' in body.rest) {
      search_result['name'] = body.rest.name;
    }
    // 画像
    if ('image_url' in body.rest) {
      search_result['shop_image1'] = body.rest.image_url.shop_image1;
      console.log("画像:" + search_result['shop_image1']);
    }
    // 住所
    if ('address' in body.rest) {
      search_result['address'] = body.rest.address;
    }
    // 緯度
    if ('latitude' in body.rest) {
      search_result['latitude'] = body.rest.latitude;
    }
    // 経度
    if ('longitude' in body.rest) {
      search_result['longitude'] = body.rest.longitude;
    }
    // 営業時間
    if ('opentime' in body.rest) {
      search_result['opentime'] = body.rest.opentime;
    }
    callback(search_result);
  });
}
