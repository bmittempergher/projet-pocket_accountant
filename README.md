# Pocket_Accountant

> Application web permettant à l'utilisateur d'avoir un suivi des dépenses, une analyse de ces dernières, un budget prévisionnel

## Fonctionnalités

1. Visualiser ses dépenses
2. Ajouter une dépense
3. Voir graphiquement ses dépenses par catégorie
4. Filtrer ses dépenses par catégorie
5. Fixer un budget

## Interface

1. Dépenses
> Fenêtre permettant à l'utilisateur de visualiser le total de chaque catégorie de dépenses, et de fixer son budget. Son budget et ses dépenses seront visualisable via une bar de progression qui se videra au fur et à mesure que son budget est dépensé.

2. Transactions
> Fenêtre affichant l'ensemble des dépenses regroupées par date. Une ligne de dépense est composée d'une image représentant la catégorie, un libellé, un montant et un bouton de suppression. Un filtre sur la catégorie est disponible.

3. Nouveau
> Donne la possibilité d'ajouter de nouvelles transactions. L'ajout se fait par le biais d'un formulaire comportant un champ texte représentant le libellé, un sélecteur avec les images représentant les catégories et un champs numérique qui accueil le montant de la dépense.

4. Graphique
> Un graphique en cercle dans lequel s'affiche les totaux des différentes catégories. Il est possible de masquer une ou plusieurs catégories. 

5. Catégories des dépenses :

    * Alimentaire
    * Loisirs
    * Transports
    * Logement
    * Habillement
    * Divers

# Architecture et naviguation

## Navigation
* La navigation entre les différentes pages se fait avec une barre de naviguation bootstrap qui se trouve dans index.html
    * Nouveau : Permet d'ajouter une dépenses
    * Transactions : Affiche les transactions
    * Dépenses : Affiches les dépenses par catégorie et comparaison avec le budget
    * Graphique : Affiche les déponeses par catégorie dans un graphique

## Routes
```bash
#src/routeur/index.js
routes: [
    {
        path: '/',
        name: 'Depenses',
        component: Depenses
    },
    {
        path: '/nouveau/',
        name: 'Nouveau',
        component: Nouveau
    },
    {
        path: '/graphique/',
        name: 'Graphique',
        component: Graphique
    },
    {
        path: '/transactions/',
        name: 'Transactions',
        component: Transactions
    }
]
```

## Composants

* index.html --> Contien la div "app"
    * src/App.vue
        * src/components/Depenses.vue --> Affiche les dépenses par catégorie et une comparaison par rapport au budget
        * src/components/Graphique.vue --> Affiche un graphique des dépenses par catégorie
        * src/components/Nouveau.vue --> Permet d'ajouter une dépenses
        * src/components/Transactions.vue --> Affiche la liste des dépenses
            * src/components/Operation.vue --> Affiche une dépense
* src/main.js --> Contient les données et les fonctions
* src/routeur/index.js --> Contient les routes

## Données
Si le local storage est vide une liste de transactions se charge par défaut (main.js).Les catégories sont définies dans main.js.
* Categorie {nom, couleur, image}
* Transaction {date, categorie, note, montant} 


# Environnement
* [node.js] - Platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications
* [npm] - Package manager for JavaScript bundled with Node.js and can run some tasks
* [webpack] - Open-source JavaScript module bundler
* [jQuery] - JavaScript Library
* [Twitter Bootstrap] - HTML, CSS, and JavaScript framework for developing responsive web sites
* [Bootswatch] - Free themes for Bootstrap
* [Chart.js] - JavaScript Library to display charts
* [Github Desktop] - Version Control System
* [Google Chrome] - Web Browser to display and debug
* [Visual Studio Code] - IDE to build code

## Mise en place de l'environement de développement

Intaller les outils cités plus haut si ce n'est pas déjà fait.

Télécharger et installer Node.js 
* Il permet d'utiliser JavaScript en dehors du navigatueur
* [Lien de téléchargement](https://nodejs.org/en/download/)


### 1. installer la vue-cli en global
    npm install -g vue-cli

### 2. Utiliser vue init pour créer notre nouveau proget
    vue init webpack pocket_accountant

### 3. Installation des dépendances
    npm install

### 4. Configuration
#### 4.1 Installer les dépendances (jquery/bootstrap/bootswatch/chart.js)
    npm install jquery bootstrap@3 bootswatch chart.js --save

### 5 Configuration du code avec ESlint
#### 5.1 Ajouter des règles suivantes dans **.eslintrc.js** (En-dessous de ` "rules": { `)
    "semi": ["error", "always"],
    "indent": ["error", 4],`

### 6 Corriger webpack pour qu'il supporte jquery
#### 6.1 Ajouter les lignes suivantes dans **build/webpack.dev.conf** et **build/webpack.prod.conf**
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
#### 6.2 Corriger la ligne `devtool`
    devtool: 'source-map',

### 7. Finir l'installation de Jquery et Bootstrap
#### 7.1 Dans le fichier **src/main.js**
    import $ from 'jquery';
    import 'bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootswatch/cosmo/bootstrap.min.css';


### 8. Créer un fichier pour customiser personnelement vos pages
#### 8.1 Créer un main.css dans votre dossier src
**src/main.css**
#### 8.2 Ajouter l'import de votre CSS à la suite de `bootstrap.min.css` du fichier **main.js**
    import './main.css';

## Framework

> Bootstrap

> Bootswatch - Cosmo

## Git

> Après l'installation de git, il faut modifier le fichier de config
> Il se trouve dans le dossier cacher à la racine de votre projet : **.git/config**

> Ajouter une section `[user]` avec les informations suivantes :

    email = votre@email.ch
    name = votre_nom


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

   [Chart.js]: <http://www.chartjs.org/>
   [webpack]: <https://webpack.js.org/>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [npm]: <https://www.npmjs.com/>
   [GitHub Desktop]: <https://desktop.github.com/>
   [Visual Studio Code]: <https://code.visualstudio.com/>
   [Google Chrome]: <https://www.google.fr/chrome/browser/desktop/index.html>
   [Bootswatch]: <https://bootswatch.com/>
