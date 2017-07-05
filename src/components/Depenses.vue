<template>
  <div class="hello">
    <h1>Dépenses</h1>
    <div class="row">
      <label for="budget">Budget</label>
      <input id="budget" size="8" type="number" v-model="$root.budget"> CHF
    </div>
    <p>{{ $root.budget }}</p>
  
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" v-bind:aria-valuemax="percent" v-bind:style="'width:'+$root.depenses / $root.budget * 100+'%'">
        <span class="sr-only">70% Complete</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            // percent: this.$root.depenses / this.$root.budget
            percent: this.$root.depenses / this.$root.budget * 100
        };
    }
};

</script>
