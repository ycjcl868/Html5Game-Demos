var fs = require('fs');
fs.readFile('http.js',function (err, data) {
    if(err) throw err;
    else
        console.log(data);
});