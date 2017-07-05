import Vue from 'vue';
import Router from 'vue-router';
import Depenses from '@/components/Depenses';
import Nouveau from '@/components/Nouveau';
import Graphique from '@/components/Graphique';
import Transactions from '@/components/Transactions';

Vue.use(Router);

export default new Router({
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
});
