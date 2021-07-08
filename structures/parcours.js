// Parcours de graphe

// Sommets = [A, B, C, D, E ,F]

// arêtes = [[A,B], [A,E], [B,C], [B,D], [C,F], [E,F]]
// En nombres = 1,2  1,5  2,3  2,4  3,6  5,6
// Représentation sous forme de tableau :

/*

   A B C D E F
A |0|1|0|0|1|0|
B |1|0|1|1|0|0|
C |0|1|0|0|0|1|
D |0|1|0|0|0|0|
E |1|0|0|0|0|1|
F |0|0|1|0|1|0|

*/

// sommets = 6;
// aretes = [[1,2],[1,5],[2,3],[2,4],[3,6],[5,6]];

// COMPLEXITE : O(6+6) (nombre de sommets et nombre d'arêtes) ?

const nodes = [
  {
    links: [ 1, 4 ], 
    visited: false
  }, 
  {
    links: [ 0, 2, 3 ], 
    visited: false
  },
  {
    links: [ 1, 5 ], 
    visited: false
  },
  {
    links: [ 1 ],
    visited: false
  },
  {
    links: [ 0, 5 ],
    visited: false
  },
  {
    links: [ 4, 2 ],
    visited: false
  }
 ];


const dfs = start => {
  const listToExplore = [ start ];

  nodes[ start ].visited = true;

  while ( listToExplore.length ) {
    // On récupère l'index du dernier élément visité et on le retire de la liste à explorer
    const nodeIndex = listToExplore.pop();
    // Avec cet index, on trouve les noeuds voisins
    nodes[ nodeIndex ].links.forEach( childIndex => {
      // Pour chacun d'eux, s'il n'ont pas été visité, on les ajoute à la liste à explorer
      if ( !nodes[ childIndex ].visited ) listToExplore.push( childIndex );
      // On les marque comme visité
      nodes[ childIndex ].visited = true;
    } );
  }
  // On vérifie si tous les noeuds ont été visités
  console.log(nodes)
};

dfs( 1 );