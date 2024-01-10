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
categorieElement.innerText = article.categorie ?? "(Aucune catégorie)";
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "(Aucune description pour le moment)";
const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite ? "En stock" : "En rupture de stock";
//j'avais écrit ça **************article.disponibilite = true ? "En stock" : "En rupture de stock"; Pas la peine de mettre le = true!

const ficheProduit = document.querySelector(".fiches");
ficheProduit.append(imageElement, nomElement, prixElement, categorieElement, descriptionElement, disponibiliteElement);








