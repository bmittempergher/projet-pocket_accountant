<template>
  <div>
    <li class="list-group-item">
      <div class="row">
        <div class="col-xs-2">
          {{ ope.date }}
        </div>
        <div class="col-xs-3">
          <span v-for="(cat, index) in listCat" :key="index">
            <img v-if="cat.nom === ope.categorie" :src="cat.image" :alt="cat.nom" width="40px" height="40px">
          </span>
          <!-- {{ ope.categorie }} -->
        </div>
        <div class="col-xs-3">
          {{ ope.note }}
        </div>
        <div class="col-xs-2">
          {{ ope.montant.toFixed(2) }}
        </div>
        <div class="col-xs-2">
          <button v-on:click="$emit('Delete', person)" class="btn btn-danger">x</button>
        </div>
      </div>  
    </li>
  </div>
</template>

<script>
export default {
    props: ['ope'],
    data () {
        return {
            listCat: this.$root.listCategories,
            msg: 'Operation'
        };
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
