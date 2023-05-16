const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log('Aishwarya');
    const url=req.url;
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body><h1>Welcome Home<h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body><h1>Welcome to About us page<h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url==='/node'){
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body><h1>Welcome to my Node js Project<h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url==='/'){
        res.write('<html>');
    res.write('<head><title>Welcome</title></head>');
    res.write('<body><h1>Hello to Node JS<h1></body>');
    res.write('</html>');
    res.end();
    }
    
});

server.listen(4000);