const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello! To use this app, please send request to websiteName/api/greeting/YourName");
});

app.get("/api/greeting/:name", (req, res) =>{
    res.send(`Tere, ${req.params.name}`)
})

// PORT
const port = process.env.PORT || 3333;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));