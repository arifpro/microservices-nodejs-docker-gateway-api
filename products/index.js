const app = require("express")();

app.get("/products", (req, res) => res.send("Hello Products, API with MySQL!"));

const port = 3052;

app.listen(port, () => console.log(`Products API listening on port ${port}!`));
