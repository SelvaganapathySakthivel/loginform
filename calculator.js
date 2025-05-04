const http = require('http');
const url = require('url');
const math = require('./math');

http.createServer((req, res) => {
    if (req.url.startsWith('/cal')) {
        const query = url.parse(req.url, true).query;
        const num1 = parseInt(query.num1);
        const num2 = parseInt(query.num2);
        const operator = query.operator;

        res.writeHead(200, { 'Content-Type': 'text/html' });

        switch (operator) {
            case 'add':
                res.write(`<h2>The sum is: ${math.add(num1, num2)}</h2>`);
                break;
            case 'sub':
                res.write(`<h2>The subtraction is: ${math.sub(num1, num2)}</h2>`);
                break;
            case 'mult':
                res.write(`<h2>The multiplication is: ${math.mult(num1, num2)}</h2>`);
                break;
            case 'divt':
                res.write(`<h2>The division is: ${math.divt(num1, num2)}</h2>`);
                break;
            default:
                res.write('<h2>Invalid operator selected.</h2>');
        }

        return res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <form action="/cal" method="get">
                num1: <input type="number" name="num1"><br>
                num2: <input type="number" name="num2"><br><br>
                <button type="submit" name="operator" value="add">Add</button>
                <button type="submit" name="operator" value="sub">Subtract</button>
                <button type="submit" name="operator" value="mult">Multiply</button>
                <button type="submit" name="operator" value="divt">Divide</button>
            </form>
        `);
        return res.end();
    }
}).listen(3003);

console.log('Server is running on http://localhost:3003');
