<template>
    <div>
        <h1>Liste des transactions</h1>
        <ul class="list-group">
            <operation v-for="(o, index) in list" :key="index" v-bind:ope="o" v-on:supprimer="$root.supprimerDepense()"></operation>
        </ul>
        <div class="row">
            <div class="col-xs-7">
                <hr><hr>
            </div>
            <div class="col-xs-2">
                <h3>Total</h3>
            </div>
            <div class="col-xs-3">
                <h3>{{ total }}</h3>
            </div>
        </div>
    </div>
</template>

<script>

import operation from './Operation';

export default {
    data () {
        return {
            total: this.$root.depenses,
            list: this.$root.listTransactions
        };
    },
    components: {
        Operation: operation
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
