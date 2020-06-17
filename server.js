const express = require("express");

const app = express();
const PORT = 8080;

const data = []

app.use(express.json())
app.use(express.static('html'))


app.get('/data',function(req,res) {
    console.log('getting data')
    res.send(data)
})

app.post('/edit',function(req,res) {
    data[data.length] = req.body
    res.send({ status: true, message: `Cool beans, we save it for you` })
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});