# Comment updater les informations

- [Comment updater les informations](#)
	- [Informations générales](#)
		- [Pré-requis à la modification](#)
		- [Informations sur le format des données](#)
	- [Contacts](#)
	- [Photos](#)
		- [Ajouter une photo](#)
		- [Supprimer une photo](#)
	- [Vidéos](#)
	- [Shop](#)
		- [Albums](#)
		- [EP](#)
		- [Merch](#)

## Informations générales

### Pré-requis à la modification
- Il faut être connecté au compte CottonBellys pour mettre à jours les informations
- Les informations pouvant être mises à jour se trouvent dans le dossier **\_data** (cliquer dessus pour accéder aux fichiers de données)
- Chaque fichier (qui se termine par ".yml") à l'intérieur de ce dossier contient les données sur un type de données (les noms des fichiers sont explicites)
- Pour éditer un fichier, il faut cliquer sur son nom, puis sur l'icone en forme de crayon en haut à droite de la fenêtre où se situent les données ("Edit this file")

### Informations sur le format des données

La dernière ligne de la liste suivante est définitivement la plus importante à retenir.

- Chaque fichier regroupe les descriptions de tous les _objets_ d'un certain _type d'objet_
  - Exemple de _type d'objet_ : les contacts du site web (au nombre de trois lors de la rédaction de ce document : THE BAND, TOUR, PROMO)
  - Regroupées dans le _fichier_ : \_data/contacts.yml
  - Exemple d'_objet_ : 
  ```
  - name: THE BAND
    mail: com@cottonbellys.com
  ```
- Chaque _objet_ est composé d'_attributs_
  - Un _attribut_ est un ensemble _clé_ - _valeur_ séparé par **:**
    - A gauche des **:**, la clé est invariable. Elle se retrouve dans quasiment tous les objets (tous les contacts ont un **nom** et un **mail**)
    - A droite des **:**, la valeur est ce qui change d'un attribut sur l'autre
  - Pour l'_objet_ précédent, deux attributs : **name** et **email**
- Pour définir un nouvel _objet_, il faut commencer sa ligne par un **-**
- Pour ajouter un _attribut_ à un _objet_, il faut être sûr que le nouvel _attribut_ soit au même niveau d'indentation que les autres _attributs_ (pour y arriver simplement, surligner totalité du texte et appuyer sur **tabulation** pour **ajouter un cran d'indentation** our **maj + tabulation** pour **retirer un cran d'indentation**
  - Exemple : le **m** de **mail** est au même niveau que le **n** de **name**
- Ne **pas hésiter** à copier coller les _objets_ standards ci-dessous et à remplacer simplement les _valeurs_ des _attributs_

## Contacts

```
- name: le-nom-de-mon-contact-en-majuscule
  email: le-mail-de-mon-contact
```


## Photos

### Ajouter une photo

1. Aller dans le dossier **assets/photos**
2. Cliquer sur **Upload files**
3. Nommer la photo correctement sur votre ordinateur (plutôt **Band-inside.jpg** que **xM25pdjo26584Ovyrjk.jpg**)
4. Glisser-déposer la photo sur le cadre gris
5. Reprendre à l'étape 3 pour chaque photo à ajouter
6. Cliquer sur le bouton vert **Commit changes** au bas de la page

### Supprimer une photo

1. Aller dans le dossier **assets/photos**
2. Cliquer sur le nom du fichier de la photo à supprimer
3. Cliquer sur l'icone en forme de poubelle en haut à droite
4. Cliquer sur le bouton vert **Commit changes**

## Vidéos

Un seul attribut: l'**id** dela vidéo youtube

```
- id: id-de-ma-vidéo-youtube
```
Dans une url youtube:
```
https://www.youtube.com/watch?v=diYS8jyOcFc
```
L'**id** est la partie après le **v=**, donc ici : **diYS8jyOcFc**

## Shop

Le shop est plus compliqué, puisqu'il existe trois _type d'objet_ dans un seul fichier:
- albums
- ep
- merch

Mais dans tous les cas, la première étape est d'ajouter l'image correspondant au projet. Pour cela, suivre les étapes de l'ajout d'une photo, avec la différence suivante :

- Le dossier n'est pas **assets/photos**, mais **assets/pictures**

Ensuite, pour ajouter un _objet_ sous un _type d'objet_, ajouter l'objet correspondant à la suite des autres. Attention à bien l'aligner avec tous les autres (**tabulation** pour **ajouter un cran d'indentation**, **maj + tabulation** pour **retirer un cran d'indentation**, en **ayant toutes les lignes surlignées**)


### Albums

```
- name: nom-de-lalbum
  demat-link: lien-vers-player-dematerialisé
  picture: nom-de-limage.jpg/.png/.autre-chose
  price: prix-de-lalbum
```

### EP

```
  - name: nom-de-lep
    picture: nom-de-limage.jpg/.png/.autre-chose
    demat-link: lien-vers-player-dematerialisé
```

### Merch

De tous les _types d'objets_ celui-ci est le plus complexe, à cause des tailles. Un objet ayant toutes les tailles disponibles ressemble à ceci :

```
  - name: nom-du-produit
    picture: nom-de-limage.jpg/.png/.autre-chose
    price: prix-de-larticle
    sizes:
      - XS
      - S
      - M
      - L
      - XL
      - XXL
      - XXXL
```

Un objet n'ayant pas toutes les tailles disponbile ressemble à cela (les lignes correspondant aux tailles manquantes ont simplement été enlevées) :

```
  - name: nom-du-produit
    picture: nom-de-limage.jpg/.png/.autre-chose
    price: prix-de-larticle
    sizes:
      - XS
      - S
      - XL
      - XXXL
```

Un objet n'ayant plus de tailles disponibles ressemble à ceci (la liste des tailles est remplacée par le mot **out**) :

```
  - name: nom-du-produit
    picture: nom-de-limage.jpg/.png/.autre-chose
    price: prix-de-larticle
    sizes: out
```
Enfin, un objet n'ayant pas de tailles du tout (exemple: le sac) ressemble à ceci :

```
  - name: nom-du-produit
    picture: nom-de-limage.jpg/.png/.autre-chose
    price: prix-de-larticle
```
