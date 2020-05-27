const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request received')
  console.log(req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('X-Foo', 'bar')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  // res.end('okkkkkkkkkkktesttesttesttest')
  res.end(
`<html>
<head>
    <style>
        #container {
            display: flex;
            width: 500px;
            height: 300px;
            background-color: rgb(255, 121, 166);
        }
        .item1 {
            width: 200px;
            height: 100px;
            background-color: rgb(20, 232, 182);
        }
        .item2 {
            flex: 1;
            background-color: rgb(100, 150, 230);
        }
    </style>
</head>
<body>
    <div id="container">
        <div class="item1"></div>
        <div class="item2"></div>
    </div>
</body>
</html>`)
})

server.listen(8088)
