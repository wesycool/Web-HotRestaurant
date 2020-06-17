const express = require("express");

const app = express();
const PORT = 8080;

const data = []

app.use(express.json()) // for parsing application/json

app.get('/',function(req,res) {
    console.log('it works')
    res.send(data)
})

app.post('/edit',function(req,res) {
    const newName = req.body

    data[data.length] = newName
    res.send({ status: true, message: `Cool beans, we save it for you` })
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});