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
> Un graphique

## A voir


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
