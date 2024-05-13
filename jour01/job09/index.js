const fs = require('fs');

// Chemin vers le fichier
const filePath = 'data.txt';

// Nouveau contenu à écrire dans le fichier
const newContent = "Je manipule les fichiers avec un module node !";

// Écriture dans le fichier de manière asynchrone
fs.writeFile(filePath, newContent, 'utf8', (err) => {
  if (err) {
    console.error("Une erreur s'est produite lors de l'écriture dans le fichier :", err);
    return;
  }
  
  console.log("Le contenu du fichier a été modifié avec succès !");
});
