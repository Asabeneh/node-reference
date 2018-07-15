const fs = require('fs');
const http = require('http');
const nodemailer = require('nodemailer');



const port = process.env.PORT || 3000;
const responseError = (err) => {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
}

http.createServer((req, res) => {
    const url = req.url;
    const statusCode = res.statusCode;
    const method = req.method;
   
  
}).listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'asabeneh@gmail.com',
        pass:'ddddddA'
    }
});

const mailOptions = {
    from:'asabeneh@gmail.com',
    to:'gudukasa98@gmail.com,washeraacademy@gmail.com',
    subject:'Sending Email using Node.js',
    html:'<h1>Welcome</h1><p>That was easy!</p>'
}

transporter.sendMail(mailOptions,(e,info) => {
    if(e){
        console.log(e)
    }
    else{
        console.log('Email sent: ' + info.response)
    }
})