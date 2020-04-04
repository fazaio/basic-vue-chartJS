<template>
    <div class="container">
        <linechart v-if="loaded" :linedata="chartdata" />
        <barchart v-if="loaded" :bardata="chartdata" />
        <doughnut />
    </div>
</template>
<script>
import linechart from './linechart.js'
import barchart from './barchart.js'
import doughnut from './doughnutchart.js'
import axios from 'axios'

export default {
    components: {
        linechart,
        barchart,
        doughnut
    },
    created() {
        this.apiget()
    },
    data: () => ({
        chartdata: null,
        loaded: false
    }),
    methods: {
        apiget() {
            var vm = this;
            axios.get('https://pomber.github.io/covid19/timeseries.json').then(function(response) {
                var date = []
                var conf = []
                var deat = []
                var reco = []
                var data = response.data.Indonesia.slice(-14)
                for (var i = 0; i < data.length; i++) {
                    date.push(data[i].date)
                    conf.push(data[i].confirmed)
                    deat.push(data[i].deaths)
                    reco.push(data[i].recovered)
                }
                vm.chartdata = {
                    labels: date,
                    datasets: [{
                            label: 'Meninggal',
                            borderColor: 'rgb(220,53,69,0.7)',
                            backgroundColor: 'rgb(220,53,69,0.2)',
                            data: deat
                        },
                        {
                            label: 'Konfirmasi',
                            borderColor: 'rgb(0,184,148,0.7)',
                            backgroundColor: 'rgb(0,184,148, 0.2)',
                            data: conf
                        },
                        {
                            label: 'Sembuh',
                            borderColor: 'rgb(9, 132, 227, 0.7)',
                            backgroundColor: 'rgb(9, 132, 227, 0.2)',
                            data: reco
                        }
                    ]
                }

                vm.loaded = true

            }, function(error) {
                console.log(error.statusText);
            })
        }
    }
}
</script>