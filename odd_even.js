const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  if (parsedUrl.pathname === '/odd') {
    const number = parseInt(parsedUrl.query.num1);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (!isNaN(number)) {
      const result = (number % 2 === 0) ? 'EVEN' : 'ODD';
      res.write(`<h2>The number ${number} is "${result}"</h2>`);
    } else {
      res.write('<h2>Please enter a valid number.</h2>');
    }
    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <form action="/odd" method="get">
        <label>Enter a Number: <input type="number" name="num1" required></label>
        <button type="submit">Check</button>
      </form>
    `);
    res.end();
  }
}).listen(3005, () => {
  console.log("Server running on http://localhost:3005");
});
