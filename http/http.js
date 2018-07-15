console.log('http Node Module');
const http = require('http');
const port = process.env.PORT || 3000;

const responseHeader = (type) => {
    switch(type){
        case 'Content-Type':
        return 1;
    }

};


const students = [
    {
    name:'John',
    age:25,
    country:'England'
    },
    {
    name:'Robert',
    age:30,
    country:'Spain'
    },
    {
    name:'Asabeneh',
    age:150,
    country:'Ethiopia'
    },
];


http.createServer((req, res) => {
    const url = req.url;
    const statusCode = res.statusCode;
    const method = req.method;
   
    console.log(method)

    if((method === 'GET' && url ==='/') || url ==='/text'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello Node.js\n");
    res.write("Content-Type:text/plain\n");
    res.write("Status: " + statusCode +"\n")
    res.write("URL: ", url)
    res.write(statusCode.toString())

    res.end();

    }
    else if(method === 'GET' && url ==='/html'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1> Welcome to Node.js</h1>");
        res.write("Content-Type:text/plain\n");
        res.write("Status: " + url +"\n")
        res.write("URL: ",)
        res.write(statusCode.toString())
        res.end();

    }
    else if(method === 'GET' && url ==='/json'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write((JSON.stringify(students)))
        res.end();

    }

   
   
  
}).listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})