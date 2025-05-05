const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/factorial') {
    const number = parseInt(parsedUrl.query.num);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (!isNaN(number) && number >= 0) {
      let fact = 1;
      for (let i = 2; i <= number; i++) {
        fact *= i;
      }
      res.write(`<h2>Factorial of ${number} is ${fact}</h2>`);
    } else {
      res.write('<h2>Please enter a valid non-negative number.</h2>');
    }

    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <form action="/factorial" method="get">
        <label>Enter a number: <input type="number" name="num" required></label>
        <button type="submit">Calculate Factorial</button>
      </form>
    `);
    res.end();
  }
}).listen(3006, () => {
  console.log("Server running at http://localhost:3006");
});
