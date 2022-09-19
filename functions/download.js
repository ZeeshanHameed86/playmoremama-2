const path = require("path");

exports.handler = async (event, context) => {
  let reqPath = path.join(__dirname, "../public");

  console.log(reqPath);

  return {
    statusCode: 200,
    body: "success",
  };
};
