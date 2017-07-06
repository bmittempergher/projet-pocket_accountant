<template>
    <div>
        <h1>Liste des transactions <a href="#/nouveau"><button class="btn btn-success">+</button></a></h1>
        <ul class="list-group">
            <operation v-for="(o, index) in list" :key="index" v-bind:ope="o" v-on:supprimer="$root.supprimerDepense(o)"></operation>
        </ul>
    </div>
</template>

<script>

import operation from './Operation';

export default {
    data () {
        return {
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
