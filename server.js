const express = require("express");
const open = require('open')

const app = express();
const PORT = 8080;

const data = []

app.use(express.json())
app.use(express.static('html'))

function checkAuthorization(req,res,next){
    console.log( `[checkAuthorization] called ` )
    if( req.url !== '/' ){
      res.send("Sorry you can't go there")
      return
    }
    next()
}

app.get('/data',checkAuthorization,function(req,res) {
    console.log('getting data')
    res.send(data)
})

app.post('/addReserve',function(req,res) {
    data[data.length] = req.body
    res.send({ status: true, message: `Reservation added` })
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    open('http://localhost:' + PORT)
});