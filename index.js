const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));

let customers = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Tina" },
];

// HTTP GET http://localhost:8080/api/customers
app.get("/api/customers", (req, res) => {
  // text/plain
  // text/html
  // application/json
  res.send(customers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
