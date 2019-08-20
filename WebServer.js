var fs = require('fs');
var express=require('express');
var path = require('path');


var app = express();
var dir = path.join(__dirname, 'public');



const PORT=8080;

app.get('/',(request,response)=>{
  fs.readFile('./index.html', function (err, html) {
      if (err) throw err;
      response.writeHeader(200, {"Content-Type": "text/html"});
      response.write(html);
      response.end();
  });

})


app.use(express.static(dir));
app.listen(PORT,()=>{
    console.log('server started')
})
