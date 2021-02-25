
let express = require('express');
let app = express();
let fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) throw err;    
        app.get('/', (req, res, data) => {
            res.writeHeader(200, {"Content-Type": "text/html"});  
            res.write(html);  
            res.end();  
        })
})     
module.exports = app



