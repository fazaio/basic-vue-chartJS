import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    linedata: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.linedata, { responsive: true, maintainAspectRatio: false })
  }
}