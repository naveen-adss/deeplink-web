const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/testscreen/:id?", (req, res) => {
    const id = req.params.id;
    res.send(`Got Test ID: ${id || 0}`);
})

app.get("/products/:id?", (req, res) => {
    const id = req.params.id;
    res.send(`Got Product ID: ${id || 0}`);
})

app.listen(3000);
