import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    bardata: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.bardata, { responsive: true, maintainAspectRatio: false })
  }
}