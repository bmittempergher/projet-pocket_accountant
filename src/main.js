// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Chart from './chart.js';

Vue.config.productionTip = false;

const LOCALSTORAGE_KEY_TRANSACTIONS = 'transactions';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    data () {
        let listTransactions;
        try {
            const jsonList = localStorage.getItem(LOCALSTORAGE_KEY_TRANSACTIONS);
            listTransactions = JSON.parse(jsonList);
            if (!listTransactions) {
                throw new Error();
            }
        } catch (e) {
            listTransactions = [
              { date: '05.07.2017', categorie: 'Alimentaire', note: 'McDonald', montant: 16.80 },
              { date: '06.07.2017', categorie: 'Loisirs', note: 'Jeu', montant: 20.80 },
              { date: '08.07.2017', categorie: 'Habillement', note: 'Pull', montant: 40.80 },
              { date: '08.07.2017', categorie: 'Transport', note: 'Train', montant: 12.80 }
            ];
        }
        return {
            budget: 400.00,
            listTransactions,
            listCategories: [
              { nom: 'Alimentaire', couleur: '#EF5350', image: 'url' },
              { nom: 'Loisirs', couleur: '#5C6BC0', image: 'url' },
              { nom: 'Logement', couleur: '#26C6DA', image: 'url' },
              { nom: 'Transport', couleur: '#9CCC65', image: 'url' },
              { nom: 'Habillement', couleur: '#FFCA28', image: 'url' },
              { nom: 'Divers', couleur: '#8D6E63', image: 'url' }
            ]
        };
    },
    methods: {
        getCategorieByName (nom) {
            return this.listCategories.filter(categorie => {
                return categorie.nom === nom;
            });
        },
        addToList () {
            const operation = {
                date: this.message,
                categorie: this.categorie,
                note: this.note,
                montant: this.montant
            };
            this.list.push(operation);
        },
        removeToList (operation) {
            this.listTransactions.splice(this.list.indexOf(operation), 1);
        }
    },
    watch: {
        listTransactions: {
            handler: function (val, oldVal) {
                localStorage.setItem(LOCALSTORAGE_KEY_TRANSACTIONS, JSON.stringify(this.listTransactions, null, 2));
            },
            deep: true
        }
    },
    computed: {
        pourcentage: function () {
            return this.depenses / this.budget * 100;
        },
        depenses: function () {
            return this.listTransactions.reduce((total, transaction) => total + transaction.montant, 0);
        },
        listGroupe: function () {
            return this.listTransactions.reduce((totauxCat, transaction) => {
                if (!totauxCat.hasOwnProperty(transaction.categorie)) {
                    totauxCat[transaction.categorie] = 0;
                }
                totauxCat[transaction.categorie] += transaction.montant;
                return totauxCat;
            }, {});
        }
    }
});
let data = {
    datasets: [{
        data: [50, 50],
        backgroundColor: ['White', 'rgba(0, 0, 0, 0.0)'],
        borderWidth: [1, 1]
    }]
};
let options = {
    responsive: true,
    tooltips: false,
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 75,
    hover: {mode: null}
};
    /* eslint-disable no-new */
new Chart('chart', {
    type: 'doughnut',
    data: data,
    options: options
});

