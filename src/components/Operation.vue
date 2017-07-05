<template>
  <div>
    <li class="list-group-item">
      <div class="row">
        <div class="col-xs-2">
          {{ ope.date }}
        </div>
        <div class="col-xs-3">
          {{ ope.categorie }}
        </div>
        <div class="col-xs-3">
          {{ ope.note }}
        </div>
        <div class="col-xs-2">
          {{ ope.montant }}
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
            msg: 'Operation'
        };
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
