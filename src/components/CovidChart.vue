<template>
    <canvas ref="chart" height="200"></canvas>
</template>

<script>
let chart = null;

/**
 * Create chart object
 */
function populateChartData(countries) {
    let recovered = [], deaths = [], confirmed = [], labels = [];

    for(let country of countries) {
        labels.push(country.Country);
        recovered.push(country.TotalRecovered);
        deaths.push(country.TotalDeaths);
        confirmed.push(country.TotalConfirmed);
    }

    return {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Recovered',
                data: recovered,
                backgroundColor: 'rgba(255,0,0,0.1)',
                borderColor: 'rgba(255,0,0,0.4)',
                borderWidth: 1
            }, {
                label: 'Deaths',
                data: deaths,
                backgroundColor: 'rgba(0,255,0,0.3)',
                borderColor: 'rgba(0,255,0,0.8)',
                borderWidth: 1
                
            }, {
                label: 'Confirmed',
                data: confirmed,
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
}

export default {
    /**
     * Props
     */
    props: {
        summary: {
            type: Object,
            required: true
        }
    },

    /**
     * Mounted hook
     */
    mounted() {
        let ctx = this.$refs.chart.getContext('2d');
        chart = new Chart(ctx, populateChartData(this.summary.Countries));
    },

    /**
     * Watch
     */
    watch: {
        summary(newValue) {
            let data = populateChartData(newValue.Countries);

            chart.data.labels = data.data.labels;
            chart.data.datasets = data.data.datasets;

            setTimeout(() => {
                chart.update();
            }, 10);
        }
    }
}
</script>

<style>

</style>