const path = require('path');

// Chemin complet du fichier (remplacez 'votreFichier.txt' par le nom de votre fichier)
const filePath = 'C:\\bureau\\sujets\\job05\\votreFichier.txt';
// Récupération du nom du fichier
const fileName = path.basename(filePath);
console.log('Nom du fichier :', fileName);

// Récupération de l'extension du fichier
const fileExtension = path.extname(filePath);
console.log('Extension du fichier :', fileExtension);

// Récupération du répertoire parent du fichier
const parentDirectory = path.dirname(filePath);
console.log('Répertoire parent du fichier :', parentDirectory);



