const fs = require('fs');

// Chemin vers le fichier
const filePath = 'data.txt';

// Lecture du fichier de manière asynchrone
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Une erreur s'est produite lors de la lecture du fichier :", err);
    return;
  }
  
  // Affichage d'une lettre sur deux
  let everySecondLetter = '';
  for (let i = 0; i < data.length; i += 2) {
    everySecondLetter += data[i];
  }
  console.log("Une lettre sur deux du fichier data.txt :", everySecondLetter);
});
