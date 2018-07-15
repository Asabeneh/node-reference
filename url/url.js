console.log('http Node Module');
const http = require('http');
const url = require('url');
const port = process.env.PORT || 3000;

// use this to search for query 
//http://localhost:3000/?year=2017&month=July

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    console.log(q)
    var txt = q.year + " " + q.month;
    res.end(txt);
 
}).listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})

