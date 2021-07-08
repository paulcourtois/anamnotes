# Sécurité 1.5

## Langage : C

'#' = directives de préprocesseur
include = permet d 'inclure le contenu d'un fichier dans un autre
fichiers .h pour headers contiennent les prototypes des fonctions (contenues dans des fichiers .c (source))
main est la première fonction exécutée lors du lancement d'un prog en C
int un entier dont la taille varie selon ordinateur (2o pour 16 bits, 4 sur 32bits)
int'*'ptr est une variable, qui contient l'adresse en mémoire d'une autre variable (il pointe sur cette variable)
malloc permet d'allouer de la mémoire
sizeof donne la quantité de stockage nécessaire pour stocker un objet

C'est la première fois que je vois du code en C donc j'espère ne pas dire n'importe quoi mais d'après ce que je comprends le problème vient du fait que l'on va boucler 10 millions de fois sur une fonction qui demande une allocation de mémoire (malloc) pour un entier (int). Je suis pas bien sûr des valeurs concernées mais il semblerait qu'à un moment on risque de rencontrer un problème de manque de mémoire disponible. Auquel cas, soit on obtiendra un pointer NULL en retour, soit l'application va planter (je ne sais pas dans quel cas).

## Rainbow tables

### Qu'est-ce que c'est ?

Une 'rainbow table' est un tableau qui associe un hash à un mot de passe correspondant. A la différence d'une 'hash table' simple, le hash présent dans la rainbow table n'est pas obtenu par simple digestion du mot de passe mais en lui appliquant à N reprises (les différentes bandes de l'arc en ciel) une fonction de hash et de réduction. L'opération de réduction permet d'obtenir une nouvelle chaine de caractères sur laquelle on viendra à nouveau appliquer la fonction de hash et ainsi finir par obtenir un hash final représentant un trajet unique passant par N-1 mots de passe et hash intermédiaires. On réduit donc considérablement l'espace de stockage nécessaire si l'on compare cette solution à une 'hash table' classique.

### Comment s'en protéger

Côté utilisateurs : 
règles générales -> mot de passe long, utiliser minuscules, majuscules, caractères spéciaux et chiffres. Ne pas se servir plusieurs fois du même mot de passe et éviter les mots du dictionnaire.

Côté administrateurs :

- Protéger sa base de données: notamment en évitant les attaques de type injection SQL par le biais de formulaires.
- Ne pas utiliser d'algorithme obsolète dans le hashage des mots de passe. Exemple SHA-1 et MD5: rainbow tables trouvables aisément sur le net. Utiliser plutôt des fonctions qui ont une complexité de calcul suffisante pour rendre le plus coûteux possible le calcul de masse.
- Sel : lorsque l'utilisateur crée un mot de passe, on crée un 'grain de sable' (une chaîne de caractères aléatoire) qui va se joindre au mot de passe utilisateur avant de passer dans la fonction de hachage. Ce 'salt' peut être très long et complexe et permet de fausser le lien entre valeur hachée et mot de passe de base. Il permet aussi d'éviter que des mots de passes identiques soient enregistrés en base de données et protège contre le fait que l'utilisateur utilise le même mot de passe pour plusieurs sites.
- Poivre : en combinaison avec le sel, une chaine de caractère unique pour tous les utilisateurs et qui est associée au mot de passe et au sel avant de passer dans la fonction de hachage. A la différence du sel, il n'est pas stocké dans une base de données. On le trouve généralement dans le code de l'application.