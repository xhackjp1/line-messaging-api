const APIKEY = process.env.IBM_API_KEY;

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: APIKEY
});

var images_file = fs.createReadStream('image/fruitbowl.jpg');

// var classifier_ids = ["fruits_1462128776","SatelliteModel_6242312846"];
var threshold = 0.6; // 数値を変えてみましょう

var params = {
  images_file: images_file,
  // classifier_ids: classifier_ids,
  threshold: threshold,
  accept_language: 'ja'
};

visualRecognition.classify(params, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response['images'][0]['classifiers'][0]['classes'], null, 2))
});

exports.classify = function (images_file_buffer, callback) {
  // images_file = streamifier.createReadStream(images_file_buffer);

  var params = {
    images_file: new Buffer(images_file_buffer),
    // classifier_ids: classifier_ids,
    threshold: threshold,
    accept_language: 'ja'
  };

  visualRecognition.classify(params, function(err, response) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(response['images'][0]['classifiers'][0]['classes'], null, 2))
      callback(JSON.stringify(response['images'][0]['classifiers'][0]['classes'], null, 2))
  });
}
