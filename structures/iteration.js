// Structures élémentaires

// 1.1 Itération
let counter = 0;

// N la valeur maximale du compteur // si c'est les entiers naturels, je crée une boucle infinie ?
// p le pas
// a et b, les multiples que l'on cherche

let increment = (N,p,a,b) =>{
  let result = [];


  while (counter < N){
    counter += p;
    if (counter % a == 0 && counter % b == 0){
      result.push("buzz")
    }
    else if (counter % a ==0){
      result.push("foo")
    }
    else if(counter % b == 0){
      result.push("mit")
    }
    else {
      result.push(counter)
    }
  }
  return result
};

// Test
console.log(increment(130,3,4,5))


