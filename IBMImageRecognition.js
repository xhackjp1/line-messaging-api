var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: '{iam_api_key}'
});

var images_file= fs.createReadStream('./fruitbowl.jpg');
var classifier_ids = ["fruits_1462128776","SatelliteModel_6242312846"];
var threshold = 0.6;

var params = {
  images_file: images_file,
  classifier_ids: classifier_ids,
  threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});
