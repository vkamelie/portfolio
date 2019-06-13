const express = require("express");
const app = express();

app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`It's all good on port ${PORT}`);
});
