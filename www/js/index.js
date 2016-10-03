document.addEventListener('init', function(event) {
  barChart();
  pieChart();
});

function barChart() {
  var barChartData = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      datasets: [{
          label: 'データセット1',
          backgroundColor: "rgba(220,0,220,0.5)",
          data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }]
  };
  var ctx = document.getElementById("bar-chart-area").getContext("2d");
  window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            elements: {
                rectangle: {
                    borderWidth: 4,
                    borderColor: 'rgb(100, 0, 100)',
                    borderSkipped: 'bottom'
                }
            },
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js 棒グラフ'
            }
        }
    });  
}

function pieChart() {
  var config = {
      type: 'pie',
      data: {
          datasets: [{
              data: [
                  randomScalingFactor(),
                  randomScalingFactor(),
                  randomScalingFactor(),
                  randomScalingFactor(),
                  randomScalingFactor(),
              ],
              backgroundColor: [
                  "#F7464A",
                  "#46BFBD",
                  "#FDB45C",
                  "#949FB1",
                  "#4D5360",
              ],
          }],
          labels: [
              "赤",
              "緑",
              "黄",
              "灰",
              "黒"
          ]
      },
      options: {
          responsive: true
      }
  };
  var ctx = document.getElementById("pie-chart-area").getContext("2d");
  window.myPie = new Chart(ctx, config);
}

var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
