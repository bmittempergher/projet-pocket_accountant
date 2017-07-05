// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

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
              { date: '05.07.2017', categorie: 'Restaurant', note: 'McDonald', montant: 16.80 },
              { date: '06.07.2017', categorie: 'Loisir', note: 'Jeu', montant: 20.80 },
              { date: '08.07.2017', categorie: 'Habillement', note: 'Pull', montant: 40.80 }
            ];
        }
        return {
            budget: 400.00,
            depenses: 380.00,
            listTransactions,
            listCategories: [
              { nom: 'Alimentaire', couleur: '#FF0000', image: 'url' },
              { nom: 'Loisirs', couleur: '#00FF00', image: 'url' },
              { nom: 'Logement', couleur: '#0000FF', image: 'url' },
              { nom: 'Transport', couleur: '#FF0000', image: 'url' },
              { nom: 'Habillement', couleur: '#FF0000', image: 'url' },
              { nom: 'Divers', couleur: '#FF0000', image: 'url' }
            ]
        };
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
        totalDepenses () {
            this.listTransactions.forEach(function (element) {
                // total = total + element.montant;
            });
        }
    }
});
