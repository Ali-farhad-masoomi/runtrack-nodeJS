const path = require('path');
const fs = require('fs');

try {
  // Résolution du chemin du fichier
  const filePath = path.join(__dirname, 'data.txt');

  // Lecture du contenu du fichier de manière synchrone
  const data = fs.readFileSync(filePath, 'utf8');

  // Affichage du contenu dans le terminal
  console.log("Contenu du fichier data.txt :");
  console.log(data);
} catch (error) {
  // Gestion des erreurs
  console.error("Une erreur s'est produite lors de la lecture du fichier :", error);
}


