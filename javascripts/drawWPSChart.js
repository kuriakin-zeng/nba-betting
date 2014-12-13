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
        value: 50,
        color: 'red',
        width: 2,
      }],
      title: {
        text: 'Percent',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }],
    tooltip: {
      shared: true
    },

    series: [{
      name: 'Percent',
      type: 'spline',
      data: data,
      tooltip: {
        pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.2f}</b> '
      }
    }, {
        name: 'Score error',
        type: 'errorbar',
        data: errorData,
        tooltip: {
          pointFormat: '(error range: {point.low:.2f}-{point.high:.2f})<br/>'
        }
    }]
  });
}