<template>
  <div>
    <div class="container">
      <h1>Ajouter une dépense</h1>
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <label for="note">Note : </label>
          </div>
          <div class="col-md-6 col-xs-12">
            <input id="note" v-model="newNote">
          </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
          <div v-for="(el, index) in ListCat" :key="index">       
            <label class="radio-inline" v-bind:for="el.nom">
              <input type="radio" v-model="newCat" :value="el.nom" :id="el.nom" name="Categorie">
              <img :src="el.image" :alt="el.nom" width="50px" height="50px"> 
            </label>       
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <label for="Montant">Montant : </label>  
          </div>
          <div class="col-md-6 col-xs-12">
            <input type="number" id="Montant" v-model="newMontant">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-xs-6">
            <button type="submit" class="btn btn-success">Valider</button>
          </div>
          <div class="col-md-6 col-xs-6">
            <button type="submit" class="btn btn-danger">Effacer</button>
          </div>
        </div>
        La note : {{ newNote }} /
        La catégorie : {{ newCat }} /
        Le montant : {{ newMontant }}
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
