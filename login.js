var http = require('http')
var url = require('url')
http.createServer(function(req,res){
 if(req.url.startsWith('/inputform')){
    var user = url.parse(req.url, true).query;
    let name = user.username
    let password =user.password
    if(name !== "admin" || password !== "admin"){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Username Or Password is Invalid</h1>')
    }
    else{
        res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Login Successful</h1>')
    }
res.end()
 }   
else{
    res.write('<h1>Login Form</h1>')
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<form action="inputform" method="get">')
    res.write('<input type="text" name="username" ><br>')
    res.write('<input type="text" name="password" ><br>')
res.write('<input type = "submit" value="submit">')
res.write('</form>')
return res.end()
}
}).listen(3002)
 console.log('server runing')