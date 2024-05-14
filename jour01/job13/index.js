const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = './index.html'; // Par défaut, on renvoie index.html

    if (req.url === '/about') {
        filePath = './about.html'; // Si l'URL demandée est '/about', on renvoie about.html
    }

    // Lire le fichier correspondant et l'envoyer en réponse
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found!');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

const PORT = 8888;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

