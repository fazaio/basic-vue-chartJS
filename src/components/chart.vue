<template>
    <div class="container">
        <linechart v-if="loaded" :chartdata="chartdata"/>
        <barchart v-if="loaded" :bardata="chartdata"/>
        <doughnut/>
    </div>
</template>
<script>
import linechart from './linechart.js'
import barchart from './barchart.js'
import doughnut from './doughnutchart.js'

export default {
    components: {
        linechart,
        barchart,
        doughnut
    },
    data: () => ({
        loaded: false,
        chartdata: null
    }),
    async mounted() {
        this.chartdata = {
                labels: [1, 2, 3, 4],
                datasets: [{
                        label: 'Meninggal',
                        borderColor: 'rgb(220,53,69,0.7)',
                        backgroundColor: 'rgb(220,53,69,0.2)',
                        data: [1, 2, 3, 4]
                    },
                    {
                        label: 'Konfirmasi',
                        borderColor: 'rgb(0,184,148,0.7)',
                        backgroundColor: 'rgb(0,184,148, 0.2)',
                        data: [1, 2, 3, 4]
                    },
                    {
                        label: 'Sembuh',
                        borderColor: 'rgb(9, 132, 227, 0.7)',
                        backgroundColor: 'rgb(9, 132, 227, 0.2)',
                        data: [1, 2, 3, 4]
                    }
                ]
            },
            this.loaded = true
    }
}
</script>