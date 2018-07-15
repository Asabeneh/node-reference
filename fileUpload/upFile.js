const fs = require('fs');
const http = require('http');
const os = require('os');
const formidable = require('formidable');

const port = process.env.PORT || 3000;


http.createServer((req, res) => {
    const url = req.url;
    const statusCode = res.statusCode;
    const method = req.method;
    if(req.url =='/fileupload'){
        const form = new formidable.IncomingForm();
        form.parse(req, (err,fields,files) => {
            const oldPath = files.filetoupload.path;
            const newPath =__dirname + '/images/' + files.filetoupload.name;
            fs.rename(oldPath, newPath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
              });
        });
   
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
       
}).listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})


