const http = require('http')
const fs = require('fs')
const path = require('path')


const PORT = 3000

const server = http.createServer((request,response)=>{
    if(request.url == '/'){
        getPage(response,'home.html')
    }else if(request.url == '/product'){
        getPage(response,'product.html')
    }else if(request.url == '/about'){
        getPage(response,'about.html')
    }else{
        response.writeHead(404,{'content-type':'text/html'});
        response.write('<h1>file not found</h1><hr> wroung url')
        response.end()

    }


})

server.listen(PORT,()=>{
    console.log('Server running on port 3000.....');
})

function getPage(response,pageFile){
    response.writeHead(200,{'context-type':'text/html'})
    
    fs.readFile(
        path.join(__dirname,'views',pageFile),
        function(err,data){
            if(err) throw err 
            response.write(data)
            response.end()
        }
    )




}
