<template>
    <div>
      <ul class="list-group">
          <operation v-for="(o, index) in list" :key="index" :ope="o"></operation>
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
