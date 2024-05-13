const fs = require('fs');

// Utilisation de fs.readdir pour lire le contenu du répertoire courant
fs.readdir('./', (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du répertoire :', err);
    return;
  }

  // Filtrer les résultats pour ne conserver que les dossiers
  const folders = files.filter(file => {
    return fs.statSync(file).isDirectory();
  });

  // Afficher les noms des dossiers dans le terminal
  console.log("Les dossiers présents dans le répertoire courant sont :");
  folders.forEach(folder => {
    console.log(folder);
  });
});
