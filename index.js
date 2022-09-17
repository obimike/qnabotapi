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
        "Bearer 1fyJwo4mwY0.eNjAa_2YQ2kKUb63j1yOlxgvIBRY39gBpwADNqf-pKA",
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
