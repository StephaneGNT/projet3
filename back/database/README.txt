Dans le terminal, se placer dans le dossier contenant le fichier db_init.sql.

Taper la commande : mysql -u root -p < db_init.sql
Ceci créera l'ensemble des tables de la DB.

Taper la commande : mysql -u root -p < db_junction_tables.sql
Ceci créera l'ensemble des tables de jonction de la DB.

Taper la commande : mysql -u root -p < db_populate.sql
Ceci peuplera les différentes tables (1 ou 2 éléments / table).

En cas d'erreur, ne pas hésiter à supprimer l'entièreté de la db avec :
DROP DATABASE pimp_my_cake_admin
dans votre interface phpMyAdmin
