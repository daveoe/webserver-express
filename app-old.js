const http = require('http');

// SERVER
http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'David',
        edad: 23,
        url: req.url 
    }

    res.write(JSON.stringify(salida));
    // res.write('Hola Mundo');
    res.end();

})

// PORT
.listen(8080);

console.log('Listening to Port: 8080');