import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [1,2,3],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [20, 50 ,450]
        }
      ]
    })
  }
}