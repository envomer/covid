<template>
    <canvas ref="chart" height="200"></canvas>
</template>

<script>

let data = {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Recovered',
            data: [],
            backgroundColor: 'rgba(255,0,0,0.1)',
            borderColor: 'rgba(255,0,0,0.4)',
            borderWidth: 1
        }, {
            label: 'Deaths',
            data: [],
            backgroundColor: 'rgba(0,255,0,0.3)',
            borderColor: 'rgba(0,255,0,0.8)',
            borderWidth: 1
            
        }, {
            label: 'Confirmed',
            data: [],
            backgroundColor: 'rgba(0,0,255,0.1)',
            borderColor: 'rgba(0,0,255,0.4)',
            borderWidth: 1
        }]
    },
    options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  },
};

export default {
    props: ['summary'],
    mounted() {

        for(let country of this.summary.Countries) {
            data.data.labels.push(country.Country);
            data.data.datasets[0].data.push(country.TotalRecovered);
            data.data.datasets[1].data.push(country.TotalDeaths);
            data.data.datasets[2].data.push(country.TotalConfirmed);
        }

        var ctx = this.$refs.chart.getContext('2d');
        var myChart = new Chart(ctx, data);
    },

    computed: {
        
    }
}
</script>

<style>

</style>