console.log('Node.js in w3school');
const http = require('http');
const port = process.env.PORT || 3000;

const studenst = [
    {name:'Niko',
age:25,
country:'Finland'}
]

http.createServer((req, res) => {
    const url = req.url;
    
    // const content = req.body;
    
    res.writeHead(200,{"Content-Type":"text/html"});
    const statusCode = res.statusCode;
    const content = req
    console.log(content)
    console.log(statusCode)
    res.write("Hello Node.js");
    res.write(url)
    res.write(statusCode.toString())
    res.write(JSON.stringify(studenst))
    // res.write(content)

    res.end();
  
}).listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})