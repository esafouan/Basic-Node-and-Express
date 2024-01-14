let express = require('express');
let app = express();
console.log("Hello World");
function Handler(req, res){
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
}
app.get("/",Handler);




































 module.exports = app;
