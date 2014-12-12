function drawWPSChart(id, title, years, data, errorData) {
  $(id).highcharts({
    chart: {
      zoomType: 'xy'
    },
    legend: {
      enabled: false
    },
    title: {
      text: title
    },
    xAxis: [{
      categories: years
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      plotLines: [{
        value: 0.5,
        color: 'red',
        width: 2,
      }],
      title: {
        text: 'Score',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }],
    tooltip: {
      shared: true
    },

    series: [{
      name: 'Score',
      type: 'spline',
      data: data,
      tooltip: {
        pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.3f}°C</b> '
      }
    }, {
        name: 'Score error',
        type: 'errorbar',
        data: errorData,
        tooltip: {
          pointFormat: '(error range: {point.low:.3f}-{point.high:.3f}°C)<br/>'
        }
    }]
  });
}