const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const { url } = req;
    let filePath = '.' + url;

    // Si l'URL est "/contact", renvoie la page d'erreur
    if (filePath === './contact') {
        filePath = './error.html';
    }

    // Renvoie le fichier correspondant à l'URL demandée
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // En cas d'erreur de lecture du fichier, renvoie la page d'erreur
            fs.readFile('./error.html', (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('Error: Page not found');
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(8888, () => {
    console.log('Server is running on port 8888');
});
