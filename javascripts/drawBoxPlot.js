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
            text: 'Score'
        },
        plotLines: [{
          value: 0.524,
          color: 'red',
          width: 2,
        }],
        min: 0.4,
        max: 0.75
    },
    series: [{
      name: 'Observations',
      data: data,
      tooltip: {
        headerFormat: '<em>Number of trees: {point.key}</em><br/>',
        pointFormat: '90th percentile: {point.high:.3f}<br/>' +
                     'Q3: {point.q3:.3f}<br/>' +
                     'Median: {point.median:.3f}<br/>' +
                     'Q1: {point.q1:.3f}<br/>' +
                     '10th percentile: {point.low:.3f}<br/>'
      }
    }]
  });
}