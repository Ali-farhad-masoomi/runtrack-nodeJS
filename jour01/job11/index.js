const http = require('http');

// Fonction de gestion des requêtes
const requestHandler = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World !\n');
}

// Création du serveur
const server = http.createServer(requestHandler);

// Écoute du serveur sur le port 8888
server.listen(8888, (err) => {
  if (err) {
    return console.log('Erreur :', err);
  }
  console.log('Serveur démarré sur http://localhost:8888/');
});
