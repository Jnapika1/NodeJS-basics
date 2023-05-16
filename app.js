const http = require('http');
const fs=require('fs'); 

const server = http.createServer((req, res)=>{
    // console.log('Aishwarya');
    const url=req.url;
    const method=req.method;
    
    
    if(url==='/'){
        fs.readFile('message.txt', (err, data)=>{
            const msg=Buffer.from(data).toString();
            console.log(msg);
            
            res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write(`<body>${msg}</body>`);
        res.write('<body><form action="/message" method="POST"><input tupe="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        })
        
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        })
        return req.on('end', ()=>{
            const parsedBody=Buffer.concat(body).toString();
            const msg=parsedBody.split('=')[1];
            fs.writeFile('message.txt', msg, (err)=>{
                res.statusCode=302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
        
    }
});

server.listen(4000);