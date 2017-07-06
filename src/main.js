// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery';
import Vue from 'vue';
import App from './App';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/cosmo/bootstrap.min.css';

Vue.config.productionTip = false;

const LOCALSTORAGE_KEY_TRANSACTIONS = 'transactions';

/* eslint-disable no-new */
$(document).ready(() => {
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
                { date: '05.07.2017', categorie: 'Alimentaire', note: 'SubWay', montant: 11.20 },
                { date: '06.07.2017', categorie: 'Loisirs', note: 'Piscine', montant: 12.80 },
                { date: '05.07.2017', categorie: 'Alimentaire', note: 'McDonald', montant: 16 },
                { date: '06.07.2017', categorie: 'Loisirs', note: 'Jeu', montant: 20.80 },
                { date: '05.07.2017', categorie: 'Transport', note: 'AG', montant: 68 },
                { date: '06.07.2017', categorie: 'Divers', note: 'Facture salt', montant: 39 },
                { date: '08.07.2017', categorie: 'Habillement', note: 'Pull', montant: 40.80 }
                ];
            }
            return {
                budget: 400.00,
                listTransactions,
                listCategories: [
                { nom: 'Alimentaire', couleur: '#29B6F6', image: './static/img/icon_alimentaire.jpg' },
                { nom: 'Loisirs', couleur: '#9CCC65', image: './static/img/icon_loisir.jpg' },
                { nom: 'Logement', couleur: '#FFEE58', image: './static/img/icon_logement.jpg' },
                { nom: 'Transport', couleur: '#FFA726', image: './static/img/icon_transport.jpg' },
                { nom: 'Habillement', couleur: '#AB47BC', image: './static/img/icon_habit.jpg' },
                { nom: 'Divers', couleur: '#EF5350', image: './static/img/icon_divers.jpg' }
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
            depenses: function () {
                return parseFloat(this.listTransactions.reduce((total, transaction) => total + transaction.montant, 0)).toFixed(2);
            },
            listGroupe () {
                return this.listTransactions.reduce((totauxCat, transaction) => {
                    if (!totauxCat.hasOwnProperty(transaction.categorie)) {
                        totauxCat[transaction.categorie] = 0;
                    }
                    totauxCat[transaction.categorie] += transaction.montant;
                    return totauxCat;
                }, {});
            },
            pourcentage () {
                return this.depenses / this.budget * 100;
            }
        },
        methods: {
            ajouterDepense (newCat, newNote, newMontant) {
                const d = new Date();
                let newDate = d.getDay() + '.' + d.getMonth() + '.' + d.getFullYear();
                if (newCat != null && newNote != null && newMontant != null) {
                    const transaction = { date: newDate, categorie: newCat, note: newNote, montant: parseFloat(newMontant) };
                    this.listTransactions.push(transaction);
                }
            },
            supprimerDepense (transaction) {
                this.listTransactions.splice(this.listTransactions.indexOf(transaction), 1);
            }
        }
    });
});

/*
listTransactionParDate (date) {
    return this.listTransactions.reduce((date, transaction) => {
        if (transaction.date !== date) {
            return transaction;
        } else {
            return false;
        }
    });
} */
