const http = require("http");
const fs = require("fs");

exports.handler = async () => {
  const file = fs.createWriteStream("file.jpg");
  const request = http.get("https://ibb.co/RytPXKx", function (response) {
    response.pipe(file);

    // after download completed close filestream
    file.on("finish", () => {
      file.close();
      console.log("Download Completed");
    });
  });

  return {
    statusCode: 200,
    headers: { "Content-type": "image/jpeg" },
    body: contents,
    isBase64Encoded: true,
  };
};
