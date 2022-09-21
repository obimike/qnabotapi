const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  const options = {
    method: "POST",
    url: "https://directline.botframework.com/v3/directline/tokens/generate",
    headers: {
      Authorization:
        "Bearer Dohr_hJk5xs.vd0PcZNj7Jew1_GqazkLlbZcbOpWvTvQsfGw4b-t3ec",
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
