const fs = require('fs');

// Chemin vers le fichier
const filePath = 'data.txt';

// Lecture du fichier de manière asynchrone
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Une erreur s'est produite lors de la lecture du fichier :", err);
    return;
  }
  console.log("Contenu du fichier data.txt :", data);
});
