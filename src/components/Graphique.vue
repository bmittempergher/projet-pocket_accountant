<template>
  <div>
      <h1>Graphique</h1>
      <div class="row">
    <canvas ref="myChart" width="400" height="400"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: 'Depenses',
    mounted () {
        /* eslint-disable no-new */
        var myChart = new Chart(this.$refs.myChart, {
            type: 'doughnut',
            data: {
                labels: ['Alimentaire', 'Loisirs', 'Logement', 'Transport', 'Habillement', 'Divers'],
                datasets: [{
                    label: 'Catégories',
                    data: [
                        this.$root.listGroupe['Alimentaire'],
                        this.$root.listGroupe['Loisirs'],
                        this.$root.listGroupe['Logement'],
                        this.$root.listGroupe['Transport'],
                        this.$root.listGroupe['Habillement'],
                        this.$root.listGroupe['Divers']
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ]
                }]
            },
            options: {
                responsive: true,
                tooltips: true,
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                cutoutPercentage: 60
            }
        });
        console.log(myChart);
    },
    data () {
        return {
            groupe: this.$root.listGroupe,
            categories: this.$root.listCategories
        };
    }
};
</script>
<style scoped>
</style>
