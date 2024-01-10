// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
// Création des balises
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;
categorieElement.innerText = article.categorie ?? "(Aucune catégorie)";

const ficheProduit = document.querySelector(".fiches");
ficheProduit.append(imageElement, nomElement, prixElement, categorieElement);








