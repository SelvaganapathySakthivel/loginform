const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    if (req.url.startsWith('/inputform')) {
        const user = url.parse(req.url, true).query;
        const mobile = user.mobile;
        const email = user.email;

        const isMobileValid = /^[0-9]{10}$/.test(mobile);
        const isEmailValid = email.includes('@') && email.includes('.');

        res.writeHead(200, { 'Content-Type': 'text/html' });
        if (isMobileValid && isEmailValid) {
            res.write('<h1>Mobile number and email are valid </h1>');
        } else {
            res.write('<h1> Invalid Mobile Number or Email</h1>');
        }
        res.end();

    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Login Form</h1>');
        res.write('<form action="/inputform" method="get">');
        res.write('Mobile Number: <input type="text" name="mobile" required><br><br>');
        res.write('Email ID: <input type="text" name="email" required><br><br>');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.end();
    }
}).listen(3003);

console.log('Server running at http://localhost:3003/');
