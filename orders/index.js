const app = require("express")();

app.get("/orders", (req, res) => res.send("Hello Orders, API with MongoDB!"));

const port = 3051;

app.listen(port, () => console.log(`Products API listening on port ${port}!`));
