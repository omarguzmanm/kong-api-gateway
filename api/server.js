const express = require("express");
const app = express();
const port = 5000;

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Omar" },
    { id: 2, name: "Ana" },
    { id: 3, name: "Luis" }
  ]);
});

app.listen(port, () => {
  console.log(`User API running at http://0.0.0.0:${port}`);
});
