const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello! To use this app, please send get request to (can be done by regular browser, by navigating to url) https://somelongappname.herokuapp.com/api/greeting/``insertyourname``  Complete url can be found in Readme file provided in github repository.");
});

app.get("/api/greeting/:name", (req, res) =>{
    res.send(`Tere, ${req.params.name}`)
})

// PORT
const port = process.env.PORT || 3333;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));