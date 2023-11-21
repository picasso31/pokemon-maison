// console.log("script chargée !");
// const imgPikatchu = "./img/Pikachu.jpg";
// const imgSalamech = "./img/salameche.png";



// let bouttonPika = document.getElementById("pikatchu");
// let affichage = document.querySelector(".affichage");
//     document.body.appendChild(affichage);

// bouttonPika = document.addEventListener("click",function () {
     
   
// });

// // function afichage(a,b) {
// //    const affichage = bouttonPika + imgPikatchu ;
// // };
// // affichage(bouttonPika,imgPikatchu);
// // console.log(affichage);
// // Définir les chemins des images pour chaque Pokémon
// const imgPikachu = "./img/Pikachu.jpg";
// const imgSalameche = "./img/salameche.png";

// // Définir les chemins des images pour chaque Pokémon
// const imgPikachu = "./img/Pikachu.jpg";
// const imgSalameche = "./img/salameche.png";

// // Fonction pour afficher l'image du Pokémon sélectionné
// function afficherPokemon(cheminImage) {
//     const affichage = document.querySelector(".affichage img");
//     affichage.src = cheminImage;
//     affichage.style.display = "block";
// }

// // Ajouter des gestionnaires d'événements pour chaque bouton de Pokémon
// const boutonPikachu = document.getElementById("pikachu");
// const boutonSalameche = document.getElementById("salameche");

// boutonPikachu.addEventListener("click", function() {
//     afficherPokemon(imgPikachu);
// });

// boutonSalameche.addEventListener("click", function() {
//     afficherPokemon(imgSalameche);
// });
// // Ajouter des gestionnaires d'événements similaires pour les autres Pokémon avec leurs propres ID et chemins d'image.
// Définir les chemins des images pour chaque Pokémon
// const imgPikachu = "./img/Pikachu.jpg";
// const imgSalameche = "./img/salameche.png";

// // Fonction pour afficher l'image du Pokémon sélectionné
// function afficherPokemon(cheminImage) {
//     const affichage = document.querySelector(".affichage img");
//     affichage.src = cheminImage;
//     affichage.style.display = "block";
// }

// // Ajouter des gestionnaires d'événements pour chaque bouton de Pokémon
// const boutonPikachu = document.getElementById("pikachu");
// const boutonSalameche = document.getElementById("salameche");

// boutonPikachu.addEventListener("click", function() {
//     afficherPokemon(imgPikachu);
// });

// boutonSalameche.addEventListener("click", function() {
//     afficherPokemon(imgSalameche);
// });
// Ajouter des gestionnaires d'événements similaires pour les autres Pokémon avec leurs propres ID et chemins d'image.
// Chemins des images pour chaque Pokémon
const imgPikachu = "./img/Pikachu.jpg";
const imgSalameche = "./img/salameche.png";
const imgCarapuce = "./img/carapuce.png";
const imgBulbizzard = "./img/bulbizzard.jpg";

// Fonction pour afficher l'image du Pokémon sélectionné
function afficherPokemon(cheminImage) {
    // Sélection de l'élément d'affichage
    const affichage = document.querySelector(".affichage img");
    
    // Mise à jour du chemin de l'image et affichage
    affichage.src = cheminImage;
    affichage.style.display = "block";
}

// Gestionnaire d'événements pour le bouton Pikachu
document.getElementById("pikachu").addEventListener("click", function() {
    afficherPokemon(imgPikachu);
});

// Gestionnaire d'événements pour le bouton Salameche
document.getElementById("salameche").addEventListener("click", function() {
    afficherPokemon(imgSalameche);
});

document.getElementById("carapuce").addEventListener("click", function(){
    afficherPokemon(imgCarapuce);
});
document.getElementById("bulbizzard").addEventListener("click", function(){
    afficherPokemon(imgBulbizzard);
})