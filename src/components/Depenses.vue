<template>
  <div>
    <h1>Dépenses</h1>
    <div class="row">
      <label for="budget">Budget</label>
      <input id="budget" size="8" type="number" v-model="$root.budget"> CHF
    </div>  
    <div class="row">
      <div class="col-xs-12">
          <div class="progress">
            <div  class="progress-bar progress-bar-danger" role="progressbar" aria-valuemax="100" aria-valuemin="0" v-bind:aria-valuenow="$root.pourcentage" v-bind:style="'width:'+$root.pourcentage+'%'">
              <span>{{ $root.depenses }}</span>
            </div>
          </div>
      </div>
    </div>
  <!-- -->
    <ul class="list-group" heigth="50px">
      <div v-for="(el, index) in listCat" v-bind:key="index">
        <li class="list-group-item" v-bind:style="{ 'background-color': el.couleur }">
          <div class="row">
            <div class="col-xs-4 text-left">
              <img :src="el.image" :alt="el.nom" width="40px" height="40px">
            </div>
            <div class="col-xs-4 text-left">
              <h4>{{el.nom}}</h4>
            </div>
            <div class="col-xs-4 text-right">
              <h4>{{ parseFloat(groupe[el.nom]).toFixed(2) }} CHF</h4>
            </div>
          </div>
        </li>
      </div>
    </ul>
 
    <div class="row">
      <div class="col-xs-8 text-left">
        <h3><b>Total</b></h3>
      </div>
      <div class="col-xs-4 text-right">
        <h3><b>{{ $root.depenses }} CHF</b></h3>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
    name: 'Depenses',
    data () {
        return {
            groupe: this.$root.listGroupe,
            listCat: this.$root.listCategories
        };
    }
};

</script>
