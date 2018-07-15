const fs = require('fs');
const http = require('http');
const os = require('os')
const {webTools} = require('../webTools/webTools');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    const url = req.url;
    const statusCode = res.statusCode;
    const method = req.method;
   

    if((method === 'GET' && url ==='/') || url ==='/home'){
    fs.readFile('index.html',(err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        res.end();

    })
   
    }
    else if(method === 'GET' && url ==='/about'){
        fs.readFile('about.html',(err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
    
        })
        }
        else if(method === 'GET' && url ==='/contact'){
            fs.readFile('contact.html',(err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
        
            })
            }

        const networkInterfaces = os.networkInterfaces( );
        const ip = networkInterfaces['Local Area Connection'][1].address;
        const user = os.hostname();
        const checkedPage  = req.url

        const content = `User: ${user} user ip: ${ip} time loggedin: ${webTools.displayDateTime()} checked:${checkedPage} page\n`;
        console.log(content)

        fs.appendFile('track.user.txt',content, (err) => {
            if(err) throw err;
            console.log('Saved')
        });
        fs.writeFile('writeFile.txt', content, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    
   
   
  
}).listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})

       
   
   



