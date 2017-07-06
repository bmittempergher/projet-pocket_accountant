<template>
  <div>
      <h1>Ajouter une dépense</h1>
      <div class="row">
          <div class="col-xs-12">
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 text-center">
            <label for="note"> 
              Note :
            </label>
          </div>
          <div class="col-xs-6">
            <input id="note" v-model="newNote">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 text-center">
            <label for="Montant">
              Montant : 
            </label>  
          </div>
          <div class="col-xs-6">
            <input type="number" id="Montant" v-model="newMontant">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="block">
            <div v-for="(el, index) in ListCat" :key="index"> 
              <div class="col-xs-12">               
                <label v-bind:for="el.nom">
                  <span class="input-group-addon"> 
                    <input type="radio" v-model="newCat" :value="el.nom" :id="el.nom" name="Categorie">
                    <img :src="el.image" :alt="el.nom" width="50px" height="50px"> 
                    <h4>{{el.nom}}</h4>
                  </span>
                </label> 
              </div>              
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button v-on:click="$root.ajouterDepense(newCat, newNote, newMontant)" class="btn btn-success"><a href="#/transactions">Valider</a></button>
          </div>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            ListCat: this.$root.listCategories,
            newNote: '',
            newCat: '',
            newMontant: '',
            msg: 'Nouveau'
        };
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
