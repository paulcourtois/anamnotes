// 2.2: Observable

// Observer design pattern : au centre de ce patron de conception, un subject qui contrôle l'ensemble. Un observer qui regroupe les objets concernés. Les objects qui réagissent aux changements d'état du subject.


// on crée d'abord le sujet

function Subject(){
  // La liste des observateurs, vide au début
  this.observersList = []
};

// Notre sujet dispose de 3 méthodes attachées : subscribe, unsubscribe, fire

Subject.prototype = {
  // la méthode fonction permet d'ajouter une fonction à la liste des observateurs
  subscribe: function(fn)
  {
    this.observersList.push(fn)
  },
  // la méthode qui permet de retirer une fonction de la liste des observateurs
  unsubscribe: function(fnToUnsub)
  {
    this.observersList = this.observersList.filter ( observer => {
      // si l'observateur n'est pas la fonction à désinscrire, on le retourne tel quel
      if (observer != fnToUnsub){
        return observer
      }
    })
  },
  // enfin, la méthode qui envoie une 'notification' et déclenche toutes les fonctions subscribed à notre sujet
  fire: function()
  {
    //on déclenche toutes les fonctions présentes dans notre liste d'oservateurs
    this.observersList.forEach( observer =>{
      observer();
    })
  }
}


// Maintenant nous allons créer des fonctions qui seront observatrices

let testObservateur1 = ()=> {
  console.log
}

