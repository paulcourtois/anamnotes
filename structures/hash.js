// Créer un annuaire téléphonique avec une table de hachage

// Table de hachage : associe à une paire clé/valeur un indice dans un tableau de manière efficace

// Première étape: on crée notre classe PhoneBook avec une taille limite et un compteur d'entrées

class PhoneBook {
  constructor () {
    this.table = new Array(127);
    this.size = 0; // annuaire vide à la création
  }

  // Deuxième étape : on crée une méthode qui transforme notre clé en index dans le tableau

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // on utilise le code caractère ASCII
      hash += key.charCodeAt(i);
    }
    // L'index doit être compris entre 0 et 127 (taille de notre tableau)
    return hash % this.table.length;
  }

  // Troisième étape : on ajoute 2 méthodes pour ajouter des paires noms/numéros à notre annuaire et pour les rechercher

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        // Si la clé existe déjà, on modifie la valeur
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      // Si la clé n'existe pas, on ajoute un tableau clé, valeur pour éviter les colisions
      this.table[index].push([key, value]);
    } else {
      // S'il n'y a rien à cet index, on crée un nouveau tableau et on y ajoute notre tableau avec paire clé/valeur
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  };

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      // dans le cas où un index a plusieurs paires associées, on est obligé de boucler dessus
     
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
  }
  // si on ne trouve rien, on retourne undefined
  return undefined;
  };

  // Quatrième étape : on ajoute une méthode pour supprimer une paire du tableau
  remove(key) {
    // On retrouve l'index avec notre méthode de hash
    const index = this._hash(key);

    // Si on a un résultat, on le remet à undefined
    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  };

  
};
// TEST

// On crée une instance de notre annuaire: 

const annuaire = new PhoneBook();

annuaire.set('Paul', +33685487550)
annuaire.set('Roger', +33623154878)
console.log(annuaire.get('Paul'));
console.log(annuaire.get('Roger'));

console.log(annuaire.remove('Roger'));

console.log(annuaire.get('Thierry'))
console.log(annuaire.get('Roger'));


// TODO: VOIR ERREUR A L'EXECUTION DU SCRIPT (suite à remove)