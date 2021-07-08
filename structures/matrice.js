// Matrice est un tableau à 2 dimensions, ayant n lignes et p colonnes
  // On notera Ai,j la valeur située à la ligne i et colonne j

// Un vecteur est un tableau à une dimension

// Soit M une matrice (avec n lignes et p colonnes) et V un vecteur (avec p composantes), le produit matriciel MV est un vecteur R ayant n composantes


// Complexité du produit matriciel, plusieurs définitions  : nombre d'opérations nécessaires à sa résolution  ?
// En terme de complexité informatique, le produit matriciel aurait une complexité de O(n*p)  (on boucle 2 fois, pour les lignes et les colonnes)

// lignes = n;
// colonnes = p;


// On crée une fonction qui représente une matrice
let matrice = (n,p)=>{
  let result = [];
  for (i = 1; i < n+1; i++){
    let row = [];
    for (j = 1; j < p+1; j++){
      row.push(`a${i}${j}`)
    }
    result.push(row);
  }
  return result
}
// Test
console.log('ma matrice', matrice(3,2));


// On crée une fonction qui crée un vecteur
let vecteur = (p)=>{
  let result = [];
  for (k = 1; k < p+1; k++){
    result.push(`x${k}`)
  }
  return result;
}
// Test
console.log ('mon vecteur', vecteur(2));

// On crée une fonction qui calcule un produit matriciel, à partir des fonctions précédentes
// On ajoute un compteur pour calculer le nombre d'opérations
let complexCounter = 0;
let produitMatriciel = (n,p) =>{
  let maMatrice = matrice(n,p);
  let monVecteur = vecteur(p);

  let produit = [];
  for (i = 0 ; i < n ; i++){
    let row = [];
    for (j = 0; j < p; j++){
      let column = maMatrice[i][j] + ' * ' + monVecteur[j];
      complexCounter++
      if (j <p-1){
        column = column + ' + ' ;
        complexCounter++ ;
      }
      row.push(column)
    }
    produit.push(row);
  }
  return produit
}

// TODO: meilleur rendu du produit
console.log( produitMatriciel(3,5), "complexité: 0(n*p) et nombre d'opérations: ", complexCounter)

// Complexité est plutôt : O(n*p)  (on boucle 2 fois, pour les lignes et les colonnes)
