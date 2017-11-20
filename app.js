var express = require ('express')
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res)=>{
  /*res.send(`<h1>Hello World</h1>
    <h2>The Current Time is: ${new Date().toISOString()}!</h2>`)*/
  res.sendFile('index.html');
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
})