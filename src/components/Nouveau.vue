<template>
  <div>
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
        <div class="col-md-4">
          <input type="radio" name="cat" id="Alimentaire" value="Alimentaire" v-model="newCat">
          <label for="Loisirs">Alimentaire</label>
        </div>
        <div class="col-md-4">
          <input type="radio" name="cat" id="Loisirs" value="Loisirs" v-model="newCat">
          <label for="Loisirs">Loisirs</label>
        </div>
        <div class="col-md-4">
          <input type="radio" name="cat" id="Logement" value="Logement" v-model="newCat">
          <label for="Logement">Logement</label>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <input type="radio" name="cat" id="Transport" value="Transport" v-model="newCat">
          <label for="Transport">Transport</label>
        </div>
        <div class="col-md-4">
          <input type="radio" name="cat" id="Habillement" value="Habillement" v-model="newCat">
          <label for="Habillement">Habillement</label>
        </div>
        <div class="col-md-4">
          <input type="radio" name="cat" id="Divers" value="Divers" v-model="newCat">
          <label for="Divers">Divers</label>
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
        <div class="col-md-6 col-xs-12">
          <button type="submit" class="btn btn-success">Valider</button>
        </div>
        <div class="col-md-6 col-xs-12">
          <button type="submit" class="btn btn-danger">Effacer</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            newNote: '',
            newCat: '',
            msg: 'Nouveau'
        };
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
