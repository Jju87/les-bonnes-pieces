// Wrap your code in an async function
async function fetchDataAndGeneratePieces() {
    // Récupération des pièces depuis le fichier JSON
    const reponse = await fetch("pieces-autos.json");
    const pieces = await reponse.json();

    // Efface le contenu de la balise body et donc l’écran
    document.querySelector(".fiches").innerHTML = '';

    function genererPieces(pieces) {
        for (let i = 0; i < pieces.length; i++) {
            const article = pieces[i];

            // Récupération de l'élément du DOM qui accueillera les fiches
            const sectionFiches = document.querySelector(".fiches");
            // Création d’une balise dédiée à une pièce automobile
            const pieceElement = document.createElement("article");
            // Création des balises 
            const imageElement = document.createElement("img");
            imageElement.src = article.image;
            const nomElement = document.createElement("h2");
            nomElement.innerText = article.nom;
            const prixElement = document.createElement("p");
            prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
            const categorieElement = document.createElement("p");
            categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
            const descriptionElement = document.createElement("p");
            descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
            const stockElement = document.createElement("p");
            stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

            // On rattache la balise article a la section Fiches
            sectionFiches.appendChild(pieceElement);
            // On rattache l’image à pieceElement (la balise article)
            pieceElement.appendChild(imageElement);
            pieceElement.appendChild(nomElement);
            pieceElement.appendChild(prixElement);
            pieceElement.appendChild(categorieElement);
            //Ajout des éléments au DOM pour l'exercice
            pieceElement.appendChild(descriptionElement);
            pieceElement.appendChild(stockElement);
        }
    }

    genererPieces(pieces);

    const boutonTrier = document.querySelector(".btn-trier")
    boutonTrier.addEventListener("click", function () {
        const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function (a, b) {
            return b.prix - a.prix;
        });
        document.querySelector(".fiches").innerHTML = ""
        genererPieces(piecesOrdonnees)

    });

    const btnCroissant = document.querySelector(".btn-croissant");
    btnCroissant.addEventListener("click", () => {
        const piecesOrdonnees = Array.from(pieces)
        piecesOrdonnees.sort(function (a, b) {
            return a.prix - b.prix
        })
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesOrdonnees)

    });

    const priceRange = document.getElementById("price-range");
    priceRange.addEventListener("input", () =>{
        const piecesFiltrees = pieces.filter(function(piece){
            return piece.prix <= priceRange.value})
        
        document.querySelector(".fiches").innerHTML="";
        genererPieces(piecesFiltrees);
        })

    
}

// Call the async function
fetchDataAndGeneratePieces();



 const names = pieces.map(piece =>piece.nom)
 const abordablesElement = document.querySelector(".abordables")
 const listNames = document.createElement("ul")

 const describe = pieces.map(piece => piece.description)
 const price = pieces.map(piece => piece.prix)

 

 
 //Création de la liste
//Ajout de chaque nom à la liste
for(let i=0; i < names.length ; i++){
   

    if (pieces[i].disponibilite === true) {
        const nomElement = document.createElement('li');
        nomElement.innerText = names[i];

        const describeElement = document.createElement("p")
        describeElement.innerText =describe[i]

        const priceElement = document.createElement("p")
        priceElement.innerText = ` ${price[i]} € `


        nomElement.appendChild(describeElement)
        listNames.appendChild(nomElement)
        nomElement.appendChild(priceElement)
    }
 }
 
 abordablesElement.appendChild(listNames)

 



