const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 444;

app.get("/", async (req, res) => {
  const options = {
    method: "POST",
    url: "https://directline.botframework.com/v3/directline/tokens/generate",
    headers: {
      Authorization:
        "Bearer cV9P-rfL-1k.3RAypY5YLqiDwY3x6Wu4Fxbd07oS7z7qeIUVGpcKW7I",
      "Content-Type": "application/json",
    },
    data: {},
  };

  const result = await axios.request(options).then(function (response) {
    return response.data.token;
  });

  res.json({
    token: result,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
