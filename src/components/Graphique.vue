<template>
  <div>
      <h1>Graphique</h1>
    {{ total }}
  </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            total: this.$root.totalDepenses(),
            msg: 'Graphique'
        };
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
