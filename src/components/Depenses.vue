<template>
  <div class="hello">
    <h1>Dépenses</h1>
    <div class="row">
      <label for="budget">Budget</label>
      <input id="budget" size="8" type="number" v-model="$root.budget"> CHF
    </div>

    <div class="row">
      <div class="col-xs-12 text-left">
    <div class="progress">
      <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemax="100" aria-valuemin="0" v-bind:aria-valuenow="$root.pourcentage" v-bind:style="'width:'+$root.pourcentage+'%'">
        <span>{{ $root.pourcentage }}</span>
      </div>
    </div>
    </div>
    </div>
  
    <div v-for="(montant, categorie) in $root.listGroupe" v-bind:key="categorie">
      <div class="row">
        <div class="col-xs-1 text-left" v-bind:style="'background-color:'+$root.getCategorieByName(categorie)[0].couleur">-</div>
        <div class="col-xs-7 text-left">
          <h5>{{categorie}}</h5>
        </div>
        <div class="col-xs-4 text-right">
          <h5>{{montant}} CHF</h5>
        </div>
      </div>
    </div>
  
    <div class="row">
      <div class="col-xs-8 text-left">
        <h5><b>Total</b></h5>
      </div>
      <div class="col-xs-4 text-right">
        <h5><b>{{ $root.depenses }} CHF</b></h5>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            msg: 'hello'
        };
    }
};

</script>
