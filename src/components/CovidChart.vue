<template>
    <canvas ref="chart" height="200"></canvas>
</template>

<script>

let data = {
    type: 'bar',
    data: {
        labels: ['Germany', 'Austria', 'Malta'],
        datasets: [{
            label: 'Recovered',
            data: [13,44,9],
            backgroundColor: 'rgba(255,0,0,0.1)',
            borderColor: 'rgba(255,0,0,0.4)',
            borderWidth: 1
        }, {
            label: 'Deaths',
            data: [13,44,90],
            backgroundColor: 'rgba(0,255,0,0.3)',
            borderColor: 'rgba(0,255,0,0.8)',
            borderWidth: 1
            
        }, {
            label: 'Confirmed',
            data: [13,44,9],
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
    mounted() {
        var ctx = this.$refs.chart.getContext('2d');
        var myChart = new Chart(ctx, data);
    }
}
</script>

<style>

</style>