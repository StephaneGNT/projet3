L'application PimpMyCake a été développée en ReactJS et Node, avec un middleware Express et une DB MySQL.
Côté React, le partage de données se fait avec Redux.


ARCHITECTURE

Appli en 2 parties, une "Admin" et une "Public"

Côté Admin : 
  - 1 "page d'accueil" Admin.jsx, qui se contente de redistribuer vers les différentes pages de la partie Admin ;
  - 1 page Login (vers laquelle l'utilisateur est dirigé par défault s'il n'est pas loggé). L'id et le password sont stockés en DB (password hashé avec bcrypt) ;
  - 1 page Commandes (OrdersAdmin.jsx) (vers laquelle l'utilisateur est redirigé après s'être loggé), présentant la liste des commandes ; à chaque commande est associée un bouton "Détail gâteau" et un "Info client", donnant respectivement + d'infos sur le gâteau et le client. Cette page permet aussi de modifier le statut de la commande, cette modification entraînant l'envoi d'un mail au client.
  - 1 page Ingrédients (IngredientTable.jsx), présentant la liste de tous les ingrédients présents en DB, et permettant d'ajouter, supprimer ou modifider ces ingrédients.
  - 1 page Décoration (CustomizationAdmin.jsx) permettant de sélectionner les polices mises à disposition pour le message personnalisé côté User.
  - 1 page Calendrier (CalendarAdmin.jsx) permettant de bloquer des dates.
  - 1 page Contenu permettant de modifier le contenu de la page d'accueil et/ou de contact.
  - 1 page Clients permettant de lister les clients.
  - 1 page Admin permettant de lister, modifier ou supprimer les administrateurs du site.

  Côté Public :
  - 1 page d'accueil (HomePage.jsx);
  - 1 page contact (Contact.jsx);
  - 1 page mycake (PimpMyCake.jsx) qui redistribue vers les pages suivantes :
      - la page mycake (CakeInfo.jsx), permettant de choisir le type de gâteau, sa taille et éventuellement la quantité ; toutes ces caractéristiques sont transmises au reducer cake_characteristics ;
      - la page mycake/composition, qui permet de réaliser le gâteau : les différents ingrédients proposés dépends du type de gâteau choisi (IngredientsCakeStrcuture, IngredientsBrownieStructure...), et tous appellent le composant Ingredient.jsx ; le contenu de ce composant Ingredient est disabled en fonction des compatibilités, disponibilités...
      - la page mycake/customCake (CustomizationStructure.jsx) qui permet de personnaliser le gâteau à l'aide de message, de photo... L'ensemble des info est envoyé au reducer customization ;
      - la page mycake/orderDetail (OrderDetail.jsx), qui permet de résumer la commande, et demande à l'utilisateur de choisir une date;
      - la page mycake/userInfo (UserInfo.jsx) qui demande toutes les informations personnelles au client; à la confirmation, toutes les informations (client, gâteau et commande) sont enregistrées en db, et un mail de confirmation est envoyé au client et à Giluna;
      - la page mycake/orderconfirmation (ConfirmationPage), qui confirme que la commande a été validée, et renvoie ensuite l'utilisateur vers l'accueil ou la page contact.


