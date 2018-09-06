// const APIKEY = process.env.IBM_API_KEY;
const APIKEY = 'P-bvRFw8UqdwvJLbn3y7eJsP4BO01E5IYwNulH2C-GEU';


var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: APIKEY
});

var images_file= fs.createReadStream('image/fruitbowl.jpg');

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

exports.classify = function (images_file) {
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
      return JSON.stringify(response['images'][0]['classifiers'][0]['classes'], null, 2)
  });
}
