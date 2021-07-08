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
  // enfin, la méthode qui déclenche toutes les fonctions subscribed à notre sujet
  fire: function()
  {
    //on déclenche toutes les fonctions présentes dans notre liste d'oservateurs
    this.observersList.forEach( observer =>{
      observer();
    })
  }
}

// Test
// On instancie notre sujet 
const subject = new Subject();

// Maintenant nous allons créer des fonctions qui seront observatrices
let testObserver1 = () => {
  console.log('Observateur 1 répond')
}

let testObserver2 = () => {
  console.log('Observateur 2 répond à la méthode fire du subject')
}

// On oublie pas de les ajouter à la liste des observateurs avec la méthode subscribe du sujet
subject.subscribe(testObserver1);
subject.subscribe(testObserver2);

// On appelle la méthode fire pour voir si les observateurs réagissent bien

subject.fire();

// On teste la méthode unsubscribe
subject.unsubscribe(testObserver2);

subject.fire();

// ok