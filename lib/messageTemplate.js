exports.textMessage = function(text)
{
  return {
    "type": "text",
    "text": text
  }
}

exports.imagemapMessage = function (messages, url) {
  return {
    "type": "imagemap",
    "baseUrl": url, // input your image path
    "altText": "This is an imagemap",
    "baseSize": {"height": 1040,"width": 1040},
    "actions": [
      {
        "type": "message",
        "text": messages[0],
        "area": {"x": 0,"y": 360,"width": 520,"height": 340}
      },
      {
        "type": "message",
        "text": messages[1],
        "area": {"x": 520,"y": 360,"width": 520,"height": 340}
      },
      {
        "type": "message",
        "text": messages[2],
        "area": {"x": 0,"y": 700,"width": 520,"height": 340}
      },
      {
        "type": "message",
        "text": messages[3],
        "area": {"x": 520,"y": 700,"width": 520,"height": 340}
      }
    ]
  }
}

exports.singleImagemapMessage = function (typeName)
{
  if (typeName == "0") {
    return {
      "type": "imagemap",
      "baseUrl": 'replace your image url', // input your image path
      "altText": "診断を開始しますか？",
      "baseSize": {"width": 1040, "height": 1040},
      "actions": [
        {
          "type": "message",
          "text": "診断開始",
          "area": {"x": 0,"y": 0,"width": 1040,"height": 1040}
        }
      ]
    }
  }
}

/**
 * Componse parameter for Image Message with given arguments
 * @param {string} url image url with ssl protocol
 * @param {string} previewUrl image url with ssl protocol for preview, optional
 * @return {object} object with schema defined as Image Message API parameter
 */
exports.imageMessage = function (url, previewUrl) {
  return {
    "type": "image",
    "originalContentUrl": url,
    "previewImageUrl": previewUrl || url
  }
}
