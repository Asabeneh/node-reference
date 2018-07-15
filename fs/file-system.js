const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;


// Read files
// Create files
// Update files
// Delete files
// Rename files

http.createServer((req, res) => {
    const url = req.url;
    const statusCode = res.statusCode;
    const method = req.method;
   
    console.log(method)

    if((method === 'GET' && url ==='/') || url ==='/home'){
    fs.readFile('index.html',(err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        res.end();

    })
   
    }
    else if(method === 'GET' && url ==='/json'){
        fs.readFile('students.js',(err, data) => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(data);
            res.end();
    
        })
       
    
        }
    
   
   
  
}).listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})

