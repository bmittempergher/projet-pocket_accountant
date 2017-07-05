<template>
    <div>
        <h1>Liste des transactions</h1>
        <ul class="list-group">
            <operation v-for="(o, index) in list" :key="index" :ope="o"></operation>
        </ul>
        <div class="row">
            <div class="col-xs-8">
                <h3>Total</h3>
            </div>
            <div class="col-xs-4">
                {{ this.$root.Total }}
            </div>
        </div>
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
