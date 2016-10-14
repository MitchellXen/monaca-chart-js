ons.ready(function(){
  pieChart();
  barChart();
});

function pieChart() {
  var config = {
    type: 'pie',
    data: {
      datasets: [{
        data: [35, 30, 20, 10, 5],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"]
      }],
      labels: ["赤", "緑", "黄", "灰", "黒"]
    },
    options: {
      responsive: true
    }
  };
  var ctx = document.getElementById("pie-chart-area").getContext("2d");
  window.myPie = new Chart(ctx, config);
}

function barChart() {
  var config = {
    type: 'bar',
    data: {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
      datasets: [{
        label: 'データセット1',
        backgroundColor: "rgba(220,0,220,0.5)",
        data: [50, 30, 60, 80, 20, 40]
      }]
    },
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
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };
  var ctx = document.getElementById("bar-chart-area").getContext("2d");
  window.myBar = new Chart(ctx, config);  
}
