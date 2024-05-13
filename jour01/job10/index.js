const { URL } = require('url');

// Définition de l'URL initiale
const URLString = 'https://www.google.com&search=nodejs';
const parsedURL = new URL(URLString);

// Récupération du protocole utilisé
const protocol = parsedURL.protocol;

// Récupération du nom d'hôte
const hostname = parsedURL.hostname;

// Récupération des paramètres de l'URL
const searchParams = parsedURL.searchParams;

// Reformater l'URL en une nouvelle URL valide en modifiant le nom d'hôte
parsedURL.hostname = 'www.laplateforme.io';

// Ajouter à cette nouvelle URL un paramètre
parsedURL.searchParams.append('lang', 'fr');

// Affichage dans le terminal de la nouvelle URL
console.log(parsedURL.href);


