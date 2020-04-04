<template>
	<div class="area">
        <lineChart></lineChart>
        <barChart></barChart>
        <doughnut></doughnut>
	</div>
</template>
<script>
// import ba from './bar.js'
import lineChart from './linechart.js'
import barChart from './barchart.js'
import doughnut from './doughnutchart.js'

export default {
    components: {
        lineChart,
        barChart,
        doughnut
    },
    data: function() {
        return {
            dataCol: null,
            loaded: false
        }
    },
    mounted() {
        this.getChart()
    },
    methods: {
        getChart() {
            this.dataCol = {
                labels: [0, 1, 44, 3, 4],
                datasets: [{
                    label: 'tes',
                    backgroundColor: 'salmon',
                    borderColor: 'lightblue',
                    data: [3, 2, 3, 4,2.4]
                }]
            }
        }
    }
}
</script>