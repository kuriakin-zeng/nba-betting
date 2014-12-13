function drawBoxPlot(id, title, data) {
  $(id).highcharts({
    chart: {
        type: 'boxplot'
    },
    legend: {
      enabled: false
    },
    title: {
        text: title
    },
    xAxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        title: {
            text: 'Number of trees'
        },
    },
    yAxis: {
        title: {
            text: 'Percent'
        },
        plotLines: [{
          value: 52.4,
          color: 'red',
          width: 2,
        }],
        min: 40,
        max: 75
    },
    series: [{
      name: 'Observations',
      data: data,
      tooltip: {
        headerFormat: '<em>Number of trees: {point.key}</em><br/>',
        pointFormat: '90th percentile: {point.high:.2f}<br/>' +
                     'Q3: {point.q3:.2f}<br/>' +
                     'Median: {point.median:.2f}<br/>' +
                     'Q1: {point.q1:.2f}<br/>' +
                     '10th percentile: {point.low:.2f}<br/>'
      }
    }]
  });
}