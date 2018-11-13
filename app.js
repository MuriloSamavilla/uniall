const express = require('express')
const ws = require('./ws')
var fs = require('fs')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  var page = 'index.html';
  if(request.url != '/'){
    page = req.url+'.html';
  }

  fs.readFile('./'+page, function(err, data){
    if(err){
      throw err;
    }
  })

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

ws(app)

app.listen(3000, () =>{
	console.log("Servidor iniciado na porta 3000!")
})
