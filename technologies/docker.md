# Question 3.1 Docker

## Différences entre docker et un virtualbox

Une virtualbox ou machine virtuelle est un système qui agit comme un ordinateur et dispose de son propre système d'exploitation. Un ordinateur hôte peut prendre en charge plusieurs machines virtuelles (avec différents systèmes d'exploitation) en partageant ses ressources (mémoire, processeur) via un hyperviseur.

Docker est un outil qui se sert de containers pour partager une application et ses dépendances de manière simplifiée. Ces containers peuvent être utilisés pour exécuter des applications Linux ou Windows.

La première différence est que Docker utilise le système d'exploitation de l'hôte, ce qui le rend beaucoup plus léger qu'une machine virtuelle. Etant donc plus léger et ne disposant pas d'OS séparés, les conteneurs Docker sont plus faciles à partager et globalement ils sont moins demandeurs en ressources qu'une VM. N'étant pas lié à un OS, Docker permet aussi de tester une application sur différentes plates formes plus facilement.
De plus, à la différence d'une VM, il n'est pas utile d'allouer des ressources de manière permanente aux conteneurs. Il est plus facile de déployer et d'échelonner des containers sur Docker.

Inconvénients de Docker : il peut être difficile de gérer un grand nombre de containers simultanément. Le fait que les containers partagent le même OS crée une vulnérabilité de sécurité : une faille sur l'OS peut mettre en danger tous les containers.

## Faut-il augmenter ou réduire au maximum le nombre de layers d'une image docker ?

La taille d'une image docker est la somme de toutes ses couches (layers). On va chercher à avoir une image Docker la plus petite possible afin de réduire la place mémoire nécessaire à son stockage : d'une part on fait des économies dans le cas où le stockage est payant (cloud) et d'autre part on améliore le temps de chargement du conteneur lors de son exécution. Pour limiter le nombre de couches il faut penser à supprimer les fichiers inutiles dans la couche où ils sont introduits. On peut aussi fusionner plusieurs opérations en une seule couche avec l'opérateur '&'.

## Citez 3 techniques pour réduire la surface d'attaque du docker daemon

Le docker daemon écoute les requêtes faites à l'API Docker et gère les objets Docker (images, containers, réseaux, volumes de stockage).

- Utiliser le protocole SSH pour communiquer avec le docker daemon : de base la communication se fait localement ou via TCP. Ajoute une couche de sécurité et nécessite la clé SSH pour communiquer avec le serveur.
- Il faut s'assurer que les containers n'est pas le droit d'acquérir de nouveau privilèges au sein de l'environnement Docker (configuration "no-new-privileges": true dans la configurations du Daemon). Cela garantit que le container n'obtiendra pas de nouveaux privilèges. Seuls les users en qui on a confiance doivent pouvoir contrôler le docker Daemon.
- Activer l'option qui permet le remappage des noms utilisateurs. Cela permet aux processus s'exécutant dans un conteneur de s'exécuter en tant que root tout en étant remappé vers un utilisateur disposant de moins de droits sur l'hôte. Il faut modifier l'option userns-remap dans le fichier de configuration. En utilisant "default", Docker génère un utilisateur dockermap vers lequel seront remappés les utilisateurs du conteneur.