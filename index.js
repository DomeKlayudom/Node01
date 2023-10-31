const http = require('http')

const PORT = 3000

const server = http.createServer((request,response)=>{
    if(request.url == '/'){
        response.writeHead(200,{'content-type':'text/html'});
        response.write('<h1>Home Page</h1><hr>Hello')
        response.end()
    }else if(request.url == '/product'){
        response.writeHead(200,{'content-type':'text/html'});
        response.write('<h1>Product Page</h1><hr>product')
        response.end()
    }else if(request.url == '/about'){
        response.writeHead(200,{'content-type':'text/html'});
        response.write('<h1>about Page</h1><hr>about')
        response.end()
    }else
        response.writeHead(404,{'content-type':'text/html'});
        response.write('<h1>file not found</h1><hr> wroung url')
        response.end()

})

server.listen(PORT,()=>{
    console.log('Server running on port 3000.....');
})