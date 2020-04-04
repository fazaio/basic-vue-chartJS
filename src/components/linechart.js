import { Line } from 'vue-chartjs'

export default {
  extends: Line,
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